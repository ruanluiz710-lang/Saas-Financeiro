"use client"
import { useState } from "react"
import { X } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface Props {
  open: boolean
  onClose: () => void
  onAdd: (t: { id: string; title: string; amount: number; type: string; date: Date; category: string }) => void
}

const categories = ["Renda", "Moradia", "Alimentação", "Saúde", "Lazer", "Transporte", "Educação", "Outros"]

export function NewTransactionModal({ open, onClose, onAdd }: Props) {
  const [form, setForm] = useState({ title: "", amount: "", type: "EXPENSE", category: "Outros", date: new Date().toISOString().split("T")[0] })

  if (!open) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title || !form.amount) return
    onAdd({
      id: Math.random().toString(36).slice(2),
      title: form.title,
      amount: parseFloat(form.amount),
      type: form.type,
      date: new Date(form.date),
      category: form.category,
    })
    setForm({ title: "", amount: "", type: "EXPENSE", category: "Outros", date: new Date().toISOString().split("T")[0] })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Nova Transação</h2>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-gray-100"><X className="h-5 w-5 text-gray-500" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Tipo</label>
            <div className="flex overflow-hidden rounded-lg border">
              <button type="button" onClick={() => setForm({...form, type: "EXPENSE"})} className={`flex-1 py-2 text-sm font-medium transition-colors ${form.type === "EXPENSE" ? "bg-red-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}>Despesa</button>
              <button type="button" onClick={() => setForm({...form, type: "INCOME"})} className={`flex-1 py-2 text-sm font-medium transition-colors ${form.type === "INCOME" ? "bg-green-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}>Receita</button>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Descrição</label>
            <input type="text" required placeholder="Ex: Aluguel" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Valor (R$)</label>
            <input type="number" required min="0.01" step="0.01" placeholder="0,00" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Categoria</label>
            <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Data</label>
            <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 rounded-md border py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancelar</button>
            <button type="submit" className="flex-1 rounded-md bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
