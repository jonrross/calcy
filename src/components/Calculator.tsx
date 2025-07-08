import { CalculatorDisplay } from "@/components/CalculatorDisplay"
import { CalculatorButton } from "@/components/CalculatorButton"
import { useCalculator } from "@/hooks/useCalculator"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export const Calculator = () => {
  const {
    display,
    hasError,
    clear,
    clearEntry,
    inputNumber,
    inputDecimal,
    inputOperation,
    calculate,
    toggleSign,
    percentage,
  } = useCalculator()

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    }),
  }

  // Rainbow colors for each row
  const rowColors = [
    "rainbow-fn", // Row 1: function/operations
    "rainbow-red", // Row 2: 7 8 9 *
    "rainbow-orange", // Row 3: 4 5 6 -
    "rainbow-green", // Row 4: 1 2 3 +
    "rainbow-blue", // Row 5: 0 . =
    "rainbow-purple", // Sign row
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto"
    >
      <Card className="p-6 bg-white/90 border-0 shadow-2xl backdrop-blur-md rounded-2xl">
        <CalculatorDisplay value={display} hasError={hasError} />
        
        {/* Row 1 */}
        <div className="grid grid-cols-4 gap-3 mb-2">
          <motion.div custom={0} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={clear} variant="function" rowColor="rainbow-fn">AC</CalculatorButton>
          </motion.div>
          <motion.div custom={1} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={clearEntry} variant="function" rowColor="rainbow-fn">CE</CalculatorButton>
          </motion.div>
          <motion.div custom={2} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={percentage} variant="function" rowColor="rainbow-fn">%</CalculatorButton>
          </motion.div>
          <motion.div custom={3} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputOperation("/")} variant="operator" rowColor="rainbow-fn">/</CalculatorButton>
          </motion.div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-4 gap-3 mb-2">
          <motion.div custom={4} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("7")} rowColor="rainbow-red">7</CalculatorButton>
          </motion.div>
          <motion.div custom={5} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("8")} rowColor="rainbow-red">8</CalculatorButton>
          </motion.div>
          <motion.div custom={6} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("9")} rowColor="rainbow-red">9</CalculatorButton>
          </motion.div>
          <motion.div custom={7} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputOperation("*")} variant="operator" rowColor="rainbow-red">*</CalculatorButton>
          </motion.div>
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-4 gap-3 mb-2">
          <motion.div custom={8} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("4")} rowColor="rainbow-orange">4</CalculatorButton>
          </motion.div>
          <motion.div custom={9} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("5")} rowColor="rainbow-orange">5</CalculatorButton>
          </motion.div>
          <motion.div custom={10} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("6")} rowColor="rainbow-orange">6</CalculatorButton>
          </motion.div>
          <motion.div custom={11} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputOperation("-")} variant="operator" rowColor="rainbow-orange">-</CalculatorButton>
          </motion.div>
        </div>
        {/* Row 4 */}
        <div className="grid grid-cols-4 gap-3 mb-2">
          <motion.div custom={12} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("1")} rowColor="rainbow-green">1</CalculatorButton>
          </motion.div>
          <motion.div custom={13} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("2")} rowColor="rainbow-green">2</CalculatorButton>
          </motion.div>
          <motion.div custom={14} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputNumber("3")} rowColor="rainbow-green">3</CalculatorButton>
          </motion.div>
          <motion.div custom={15} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={() => inputOperation("+")} variant="operator" rowColor="rainbow-green">+</CalculatorButton>
          </motion.div>
        </div>
        {/* Row 5 */}
        <div className="grid grid-cols-4 gap-3 mb-2">
          <motion.div custom={16} initial="hidden" animate="visible" variants={buttonVariants} className="col-span-2">
            <CalculatorButton onClick={() => inputNumber("0")} rowColor="rainbow-blue">0</CalculatorButton>
          </motion.div>
          <motion.div custom={17} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={inputDecimal} rowColor="rainbow-blue">.</CalculatorButton>
          </motion.div>
          <motion.div custom={18} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={calculate} variant="equals" rowColor="rainbow-blue">=</CalculatorButton>
          </motion.div>
        </div>
        {/* Additional row for sign toggle */}
        <div className="mt-3">
          <motion.div custom={19} initial="hidden" animate="visible" variants={buttonVariants}>
            <CalculatorButton onClick={toggleSign} variant="function" rowColor="rainbow-purple">+/-</CalculatorButton>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
