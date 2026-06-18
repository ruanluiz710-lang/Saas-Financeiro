"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Wallet } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) return setError(data.error)
    localStorage.setItem("user", JSON.stringify(data))
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600"><Wallet className="h-7 w-7 text-white" /></div>
          <h1 className="text-2xl font-bold text-gray-900">Entrar na sua conta</h1>
          <p className="mt-1 text-sm text-gray-500">Não tem conta? <Link href="/auth/register" className="text-indigo-600 hover:underline">Cadastre-se grátis</Link></p>
        </div>
        <div className="rounded-xl border bg-white p-8 shadow-sm">
          {error && <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">E-mail</label><input type="email" required placeholder="seu@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">Senha</label><input type="password" required placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600"><input type="checkbox" className="rounded" /> Lembrar de mim</label>
              <Link href="#" className="text-indigo-600 hover:underline">Esqueci a senha</Link>
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50">
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
