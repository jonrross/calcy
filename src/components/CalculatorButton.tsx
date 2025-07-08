import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CalculatorButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "number" | "operator" | "function" | "equals"
  className?: string
  disabled?: boolean
  rowColor?: string // NEW
}

export const CalculatorButton = ({ 
  children, 
  onClick, 
  variant = "number", 
  className,
  disabled = false,
  rowColor = "", // NEW
}: CalculatorButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "operator":
        return "text-white font-bold text-xl"
      case "function":
        return "font-semibold"
      case "equals":
        return "text-white font-bold text-xl"
      default:
        return "font-semibold text-lg"
    }
  }

  // Rainbow color classes
  const getRowColor = () => {
    switch (rowColor) {
      case "rainbow-fn":
        return "bg-gradient-to-r from-pink-400 via-yellow-300 to-green-300 text-gray-900 shadow-pink-200/50"
      case "rainbow-red":
        return "bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 text-white shadow-red-200/50"
      case "rainbow-orange":
        return "bg-gradient-to-r from-orange-400 via-yellow-400 to-green-300 text-white shadow-orange-200/50"
      case "rainbow-green":
        return "bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 text-white shadow-green-200/50"
      case "rainbow-blue":
        return "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white shadow-blue-200/50"
      case "rainbow-purple":
        return "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white shadow-purple-200/50"
      default:
        return "bg-gray-100"
    }
  }

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "h-16 w-full rounded-xl shadow-lg border-0 transition-all duration-150",
          "active:shadow-inner active:scale-95",
          getVariantStyles(),
          getRowColor(),
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  )
}
