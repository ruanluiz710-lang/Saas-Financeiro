import Link from "next/link"
import { Wallet } from "lucide-react"
export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600"><Wallet className="h-7 w-7 text-white" /></div>
          <h1 className="text-2xl font-bold text-gray-900">Criar conta grátis</h1>
          <p className="mt-1 text-sm text-gray-500">Já tem conta? <Link href="/auth/login" className="text-indigo-600 hover:underline">Entrar</Link></p>
        </div>
        <div className="rounded-xl border bg-white p-8 shadow-sm">
          <form className="space-y-5">
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">Nome completo</label><input type="text" placeholder="João Silva" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">E-mail</label><input type="email" placeholder="seu@email.com" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">Senha</label><input type="password" placeholder="Mínimo 8 caracteres" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">Confirmar senha</label><input type="password" placeholder="••••••••" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <button type="submit" className="w-full rounded-md bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">Criar conta</button>
            <p className="text-center text-xs text-gray-400">Ao criar uma conta você concorda com nossos <Link href="#" className="text-indigo-600 hover:underline">Termos de Uso</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}
