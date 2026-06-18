import { formatCurrency, formatDate } from "@/lib/utils"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
const mock = [
  { id: "1", title: "Salário", amount: 5000, type: "INCOME", date: new Date("2026-06-01"), category: "Renda" },
  { id: "2", title: "Aluguel", amount: 1500, type: "EXPENSE", date: new Date("2026-06-05"), category: "Moradia" },
  { id: "3", title: "Supermercado", amount: 450, type: "EXPENSE", date: new Date("2026-06-08"), category: "Alimentação" },
  { id: "4", title: "Freelance", amount: 1200, type: "INCOME", date: new Date("2026-06-10"), category: "Renda" },
  { id: "5", title: "Academia", amount: 89.9, type: "EXPENSE", date: new Date("2026-06-12"), category: "Saúde" },
]
export function RecentTransactions() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-semibold text-gray-900">Transações Recentes</h2>
      <div className="space-y-4">
        {mock.map((t) => (
          <div key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={t.type === "INCOME" ? "flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600" : "flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600"}>
                {t.type === "INCOME" ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{t.title}</p>
                <p className="text-xs text-gray-500">{formatDate(t.date)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={t.type === "INCOME" ? "text-sm font-semibold text-green-700" : "text-sm font-semibold text-red-700"}>{t.type === "INCOME" ? "+" : "-"}{formatCurrency(t.amount)}</p>
              <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{t.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
