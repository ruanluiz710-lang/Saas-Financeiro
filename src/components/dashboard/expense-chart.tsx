"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
const data = [
  { mes: "Jan", receitas: 5200, despesas: 3800 },
  { mes: "Fev", receitas: 5000, despesas: 4200 },
  { mes: "Mar", receitas: 6100, despesas: 3900 },
  { mes: "Abr", receitas: 5800, despesas: 4500 },
  { mes: "Mai", receitas: 6200, despesas: 4100 },
  { mes: "Jun", receitas: 6200, despesas: 4039 },
]
const fmt = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", notation: "compact" }).format(v)
export function ExpenseChart() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-semibold text-gray-900">Receitas x Despesas</h2>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} /><stop offset="95%" stopColor="#22c55e" stopOpacity={0} /></linearGradient>
            <linearGradient id="rd" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} /><stop offset="95%" stopColor="#ef4444" stopOpacity={0} /></linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={fmt} tick={{ fontSize: 12 }} width={70} />
          <Tooltip formatter={(v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(v))} />
          <Legend />
          <Area type="monotone" dataKey="receitas" name="Receitas" stroke="#22c55e" fill="url(#gr)" strokeWidth={2} />
          <Area type="monotone" dataKey="despesas" name="Despesas" stroke="#ef4444" fill="url(#rd)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
