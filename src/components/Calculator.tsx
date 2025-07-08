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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto"
    >
      <Card className="p-6 bg-gray-800 border-gray-700 shadow-2xl">
        <CalculatorDisplay value={display} hasError={hasError} />
        
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={clear} variant="function">
              AC
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={clearEntry} variant="function">
              CE
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={percentage} variant="function">
              %
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputOperation("/")} variant="operator">
              ÷
            </CalculatorButton>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("7")}>
              7
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("8")}>
              8
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("9")}>
              9
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={7}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputOperation("*")} variant="operator">
              ×
            </CalculatorButton>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            custom={8}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("4")}>
              4
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={9}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("5")}>
              5
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={10}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("6")}>
              6
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={11}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputOperation("-")} variant="operator">
              −
            </CalculatorButton>
          </motion.div>

          {/* Row 4 */}
          <motion.div
            custom={12}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("1")}>
              1
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={13}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("2")}>
              2
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={14}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputNumber("3")}>
              3
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={15}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={() => inputOperation("+")} variant="operator">
              +
            </CalculatorButton>
          </motion.div>

          {/* Row 5 */}
          <motion.div
            custom={16}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="col-span-2"
          >
            <CalculatorButton onClick={() => inputNumber("0")}>
              0
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={17}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={inputDecimal}>
              .
            </CalculatorButton>
          </motion.div>
          <motion.div
            custom={18}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={calculate} variant="equals">
              =
            </CalculatorButton>
          </motion.div>
        </div>

        {/* Additional row for sign toggle */}
        <div className="mt-3">
          <motion.div
            custom={19}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <CalculatorButton onClick={toggleSign} variant="function">
              +/−
            </CalculatorButton>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}