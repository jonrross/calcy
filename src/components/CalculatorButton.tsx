import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CalculatorButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "number" | "operator" | "function" | "equals"
  className?: string
  disabled?: boolean
}

export const CalculatorButton = ({ 
  children, 
  onClick, 
  variant = "number", 
  className,
  disabled = false 
}: CalculatorButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "operator":
        return "bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl"
      case "function":
        return "bg-gray-400 hover:bg-gray-500 text-black font-semibold"
      case "equals":
        return "bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl"
      default:
        return "bg-gray-600 hover:bg-gray-700 text-white font-semibold text-lg"
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
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  )
}