import { useState, useCallback } from "react"

export type CalculatorOperation = "+" | "-" | "*" | "/" | "="

export interface CalculatorState {
  display: string
  previousValue: number | null
  operation: CalculatorOperation | null
  waitingForNewValue: boolean
  hasError: boolean
}

const initialState: CalculatorState = {
  display: "0",
  previousValue: null,
  operation: null,
  waitingForNewValue: false,
  hasError: false,
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState)

  const clear = useCallback(() => {
    setState(initialState)
  }, [])

  const clearEntry = useCallback(() => {
    setState(prev => ({
      ...prev,
      display: "0",
      hasError: false,
    }))
  }, [])

  const inputNumber = useCallback((num: string) => {
    setState(prev => {
      if (prev.hasError) {
        return {
          ...initialState,
          display: num,
          waitingForNewValue: false,
        }
      }

      if (prev.waitingForNewValue) {
        return {
          ...prev,
          display: num,
          waitingForNewValue: false,
        }
      }

      if (prev.display === "0") {
        return {
          ...prev,
          display: num,
        }
      }

      // Limit display to 12 characters
      if (prev.display.length >= 12) {
        return prev
      }

      return {
        ...prev,
        display: prev.display + num,
      }
    })
  }, [])

  const inputDecimal = useCallback(() => {
    setState(prev => {
      if (prev.hasError) {
        return {
          ...initialState,
          display: "0.",
          waitingForNewValue: false,
        }
      }

      if (prev.waitingForNewValue) {
        return {
          ...prev,
          display: "0.",
          waitingForNewValue: false,
        }
      }

      if (prev.display.includes(".")) {
        return prev
      }

      return {
        ...prev,
        display: prev.display + ".",
      }
    })
  }, [])

  const performCalculation = useCallback((prevValue: number, currentValue: number, operation: CalculatorOperation): number => {
    switch (operation) {
      case "+":
        return prevValue + currentValue
      case "-":
        return prevValue - currentValue
      case "*":
        return prevValue * currentValue
      case "/":
        if (currentValue === 0) {
          throw new Error("Division by zero")
        }
        return prevValue / currentValue
      default:
        return currentValue
    }
  }, [])

  const inputOperation = useCallback((nextOperation: CalculatorOperation) => {
    setState(prev => {
      if (prev.hasError) {
        return prev
      }

      const currentValue = parseFloat(prev.display)

      if (prev.previousValue === null) {
        return {
          ...prev,
          previousValue: currentValue,
          operation: nextOperation,
          waitingForNewValue: true,
        }
      }

      if (prev.operation && prev.waitingForNewValue) {
        return {
          ...prev,
          operation: nextOperation,
        }
      }

      try {
        const result = performCalculation(prev.previousValue, currentValue, prev.operation!)
        
        // Check for invalid results
        if (!isFinite(result)) {
          throw new Error("Invalid operation")
        }

        const displayValue = result.toString()
        
        // Limit display length
        const truncatedDisplay = displayValue.length > 12 
          ? parseFloat(result.toPrecision(8)).toString()
          : displayValue

        return {
          ...prev,
          display: truncatedDisplay,
          previousValue: result,
          operation: nextOperation,
          waitingForNewValue: true,
        }
      } catch (error) {
        return {
          ...prev,
          display: "Error",
          hasError: true,
          previousValue: null,
          operation: null,
          waitingForNewValue: false,
        }
      }
    })
  }, [performCalculation])

  const calculate = useCallback(() => {
    setState(prev => {
      if (prev.hasError || prev.operation === null || prev.previousValue === null) {
        return prev
      }

      const currentValue = parseFloat(prev.display)

      try {
        const result = performCalculation(prev.previousValue, currentValue, prev.operation)
        
        if (!isFinite(result)) {
          throw new Error("Invalid operation")
        }

        const displayValue = result.toString()
        
        const truncatedDisplay = displayValue.length > 12 
          ? parseFloat(result.toPrecision(8)).toString()
          : displayValue

        return {
          display: truncatedDisplay,
          previousValue: null,
          operation: null,
          waitingForNewValue: true,
          hasError: false,
        }
      } catch (error) {
        return {
          display: "Error",
          previousValue: null,
          operation: null,
          waitingForNewValue: false,
          hasError: true,
        }
      }
    })
  }, [performCalculation])

  const toggleSign = useCallback(() => {
    setState(prev => {
      if (prev.hasError || prev.display === "0") {
        return prev
      }

      const currentValue = parseFloat(prev.display)
      const newValue = -currentValue
      
      return {
        ...prev,
        display: newValue.toString(),
      }
    })
  }, [])

  const percentage = useCallback(() => {
    setState(prev => {
      if (prev.hasError) {
        return prev
      }

      const currentValue = parseFloat(prev.display)
      const result = currentValue / 100
      
      return {
        ...prev,
        display: result.toString(),
      }
    })
  }, [])

  return {
    display: state.display,
    hasError: state.hasError,
    clear,
    clearEntry,
    inputNumber,
    inputDecimal,
    inputOperation,
    calculate,
    toggleSign,
    percentage,
  }
}