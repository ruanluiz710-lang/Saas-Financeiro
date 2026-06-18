"use client"
import { useState } from "react"
import { formatCurrency, formatDate } from "@/lib/utils"
import { Plus, ArrowUpRight, ArrowDownRight, Search } from "lucide-react"
import { NewTransactionModal } from "@/components/dashboard/new-transaction-modal"

const initial = [
  { id: "1", title: "Salário", amount: 5000, type: "INCOME", date: new Date("2026-06-01"), category: "Renda" },
  { id: "2", title: "Aluguel", amount: 1500, type: "EXPENSE", date: new Date("2026-06-05"), category: "Moradia" },
  { id: "3", title: "Supermercado", amount: 450, type: "EXPENSE", date: new Date("2026-06-08"), category: "Alimentação" },
  { id: "4", title: "Freelance", amount: 1200, type: "INCOME", date: new Date("2026-06-10"), category: "Renda" },
  { id: "5", title: "Academia", amount: 89.9, type: "EXPENSE", date: new Date("2026-06-12"), category: "Saúde" },
  { id: "6", title: "Netflix", amount: 39.9, type: "EXPENSE", date: new Date("2026-06-12"), category: "Lazer" },
  { id: "7", title: "Uber", amount: 45.5, type: "EXPENSE", date: new Date("2026-06-14"), category: "Transporte" },
]

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(initial)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"ALL"|"INCOME"|"EXPENSE">("ALL")
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = transactions.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) && (filter === "ALL" || t.type === filter)
  )

  return (
    <div className="space-y-6">
      <NewTransactionModal open={modalOpen} onClose={() => setModalOpen(false)} onAdd={t => setTransactions(prev => [t, ...prev])} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transações</h1>
          <p className="text-sm text-gray-500">{filtered.length} transações encontradas</p>
        </div>
        <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <Plus className="h-4 w-4" />Nova Transação
        </button>
      </div>
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar..." value={search} onChange={e => setSearch(e.target.value)} className="w-full rounded-lg border bg-white py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="flex overflow-hidden rounded-lg border bg-white">
          {(["ALL","INCOME","EXPENSE"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 text-sm font-medium transition-colors ${filter===f?"bg-indigo-600 text-white":"text-gray-600 hover:bg-gray-50"}`}>
              {f==="ALL"?"Todos":f==="INCOME"?"Receitas":"Despesas"}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-xl border bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-xs font-medium uppercase text-gray-500">
              <th className="px-6 py-3">Descrição</th>
              <th className="px-6 py-3">Categoria</th>
              <th className="px-6 py-3">Data</th>
              <th className="px-6 py-3 text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map(t => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={t.type==="INCOME"?"flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600":"flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600"}>
                      {t.type==="INCOME"?<ArrowUpRight className="h-4 w-4"/>:<ArrowDownRight className="h-4 w-4"/>}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{t.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4"><span className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">{t.category}</span></td>
                <td className="px-6 py-4 text-sm text-gray-500">{formatDate(t.date)}</td>
                <td className="px-6 py-4 text-right">
                  <span className={t.type==="INCOME"?"text-sm font-semibold text-green-700":"text-sm font-semibold text-red-700"}>
                    {t.type==="INCOME"?"+":"-"}{formatCurrency(t.amount)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
