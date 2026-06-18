"use client"
import { formatCurrency } from "@/lib/utils"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
const monthly = [
  { mes: "Jan", receitas: 5200, despesas: 3800 },
  { mes: "Fev", receitas: 5000, despesas: 4200 },
  { mes: "Mar", receitas: 6100, despesas: 3900 },
  { mes: "Abr", receitas: 5800, despesas: 4500 },
  { mes: "Mai", receitas: 6200, despesas: 4100 },
  { mes: "Jun", receitas: 6200, despesas: 4039 },
]
const cats = [
  { name: "Moradia", value: 1500, color: "#6366f1" },
  { name: "Alimentação", value: 570, color: "#f59e0b" },
  { name: "Transporte", value: 45.5, color: "#3b82f6" },
  { name: "Saúde", value: 89.9, color: "#22c55e" },
  { name: "Lazer", value: 39.9, color: "#ec4899" },
  { name: "Outros", value: 1794, color: "#94a3b8" },
]
const fmt = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", notation: "compact" }).format(v)
export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Relatórios</h1><p className="text-sm text-gray-500">Análise financeira dos últimos 6 meses</p></div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm"><p className="text-sm text-gray-500">Total Receitas</p><p className="mt-1 text-2xl font-bold text-green-700">{formatCurrency(34500)}</p></div>
        <div className="rounded-xl border bg-white p-6 shadow-sm"><p className="text-sm text-gray-500">Total Despesas</p><p className="mt-1 text-2xl font-bold text-red-700">{formatCurrency(24539)}</p></div>
        <div className="rounded-xl border bg-white p-6 shadow-sm"><p className="text-sm text-gray-500">Economia</p><p className="mt-1 text-2xl font-bold text-indigo-700">{formatCurrency(9961)}</p></div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-semibold text-gray-900">Receitas x Despesas por Mês</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthly} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 12 }} width={70} />
              <Tooltip formatter={(v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(v))} />
              <Legend />
              <Bar dataKey="receitas" name="Receitas" fill="#22c55e" radius={[4,4,0,0]} />
              <Bar dataKey="despesas" name="Despesas" fill="#ef4444" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-semibold text-gray-900">Despesas por Categoria</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={cats} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value">
                {cats.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip formatter={(v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(v))} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
