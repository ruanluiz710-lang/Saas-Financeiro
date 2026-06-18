import { StatsCard } from "@/components/dashboard/stats-card"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { ExpenseChart } from "@/components/dashboard/expense-chart"
import { TrendingUp, TrendingDown, Wallet } from "lucide-react"
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Dashboard</h1><p className="text-sm text-gray-500">Visão geral das suas finanças em junho/2026</p></div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatsCard title="Receitas do Mês" value={6200} change={6.9} type="income" icon={<TrendingUp className="h-5 w-5" />} />
        <StatsCard title="Despesas do Mês" value={4039} change={-1.5} type="expense" icon={<TrendingDown className="h-5 w-5" />} />
        <StatsCard title="Saldo" value={2161} type="balance" icon={<Wallet className="h-5 w-5" />} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2"><ExpenseChart /><RecentTransactions /></div>
    </div>
  )
}
