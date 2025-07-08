import { Calculator } from "@/components/Calculator"
import { KeyboardHandler } from "@/components/KeyboardHandler"
import { motion } from "framer-motion"

function App() {
  return (
    <KeyboardHandler>
      <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-600 to-green-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">Calculator</h1>
            <p className="text-green-100 text-sm">
              Use keyboard or click buttons  ESC to clear  Backspace to clear entry
            </p>
          </motion.div>
          
          <Calculator />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-6 text-green-100 text-xs space-y-1"
          >
            <div>Keyboard shortcuts:</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>0-9: Numbers</div>
              <div>+, -, *, /: Operations</div>
              <div>Enter/=: Calculate</div>
              <div>.: Decimal point</div>
              <div>%: Percentage</div>
              <div>S: Toggle sign</div>
            </div>
          </motion.div>
        </div>
      </div>
    </KeyboardHandler>
  )
}

export default App
