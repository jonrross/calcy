import { cn } from "@/lib/utils"

interface CalculatorDisplayProps {
  value: string
  hasError?: boolean
  className?: string
}

export const CalculatorDisplay = ({ value, hasError = false, className }: CalculatorDisplayProps) => {
  return (
    <div 
      className={cn(
        "w-full h-20 bg-green-950 text-white rounded-lg flex items-center justify-end px-4 mb-4 shadow-inner",
        "border-2 border-green-700",
        hasError && "bg-red-900 border-red-700",
        className
      )}
    >
      <div 
        className={cn(
          "text-3xl font-mono font-bold tracking-wider",
          "overflow-hidden text-ellipsis whitespace-nowrap",
          hasError && "text-red-200"
        )}
        title={value}
      >
        {value}
      </div>
    </div>
  )
}
