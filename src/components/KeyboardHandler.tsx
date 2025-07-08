import { useEffect } from "react"
import { useCalculator, CalculatorOperation } from "@/hooks/useCalculator"

interface KeyboardHandlerProps {
  children: React.ReactNode
}

export const KeyboardHandler = ({ children }: KeyboardHandlerProps) => {
  const {
    clear,
    clearEntry,
    inputNumber,
    inputDecimal,
    inputOperation,
    calculate,
    toggleSign,
    percentage,
  } = useCalculator()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key
      
      // Prevent default behavior for calculator keys
      if (/[0-9+\-*/=.%]/.test(key) || key === "Enter" || key === "Escape" || key === "Backspace") {
        event.preventDefault()
      }

      // Numbers
      if (/[0-9]/.test(key)) {
        inputNumber(key)
        return
      }

      // Operations
      switch (key) {
        case "+":
          inputOperation("+")
          break
        case "-":
          inputOperation("-")
          break
        case "*":
          inputOperation("*")
          break
        case "/":
          inputOperation("/")
          break
        case "=":
        case "Enter":
          calculate()
          break
        case ".":
          inputDecimal()
          break
        case "%":
          percentage()
          break
        case "Escape":
          clear()
          break
        case "Backspace":
          clearEntry()
          break
        case "s":
        case "S":
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault()
            return
          }
          toggleSign()
          break
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [clear, clearEntry, inputNumber, inputDecimal, inputOperation, calculate, toggleSign, percentage])

  return <>{children}</>
}