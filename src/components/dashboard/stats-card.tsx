import { formatCurrency } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"
interface StatsCardProps { title: string; value: number; change?: number; type?: "income" | "expense" | "balance"; icon: React.ReactNode }
export function StatsCard({ title, value, change, type = "balance", icon }: StatsCardProps) {
  const isPositive = (change ?? 0) >= 0
  const iconBg = type === "income" ? "bg-green-100 text-green-600" : type === "expense" ? "bg-red-100 text-red-600" : "bg-indigo-100 text-indigo-600"
  const valueColor = type === "income" ? "text-green-700" : type === "expense" ? "text-red-700" : "text-gray-900"
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>{icon}</div>
      </div>
      <p className={`mt-3 text-2xl font-bold ${valueColor}`}>{formatCurrency(value)}</p>
      {change !== undefined && (
        <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
          {isPositive ? <TrendingUp className="h-3.5 w-3.5 text-green-500" /> : <TrendingDown className="h-3.5 w-3.5 text-red-500" />}
          <span className={isPositive ? "text-green-600" : "text-red-600"}>{isPositive ? "+" : ""}{change.toFixed(1)}%</span>
          <span>vs mês anterior</span>
        </div>
      )}
    </div>
  )
}
