import Link from "next/link"
import { Wallet } from "lucide-react"
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600"><Wallet className="h-7 w-7 text-white" /></div>
          <h1 className="text-2xl font-bold text-gray-900">Entrar na sua conta</h1>
          <p className="mt-1 text-sm text-gray-500">Não tem conta? <Link href="/auth/register" className="text-indigo-600 hover:underline">Cadastre-se grátis</Link></p>
        </div>
        <div className="rounded-xl border bg-white p-8 shadow-sm">
          <form className="space-y-5">
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">E-mail</label><input type="email" placeholder="seu@email.com" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">Senha</label><input type="password" placeholder="••••••••" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600"><input type="checkbox" className="rounded" /> Lembrar de mim</label>
              <Link href="#" className="text-indigo-600 hover:underline">Esqueci a senha</Link>
            </div>
            <button type="submit" className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
