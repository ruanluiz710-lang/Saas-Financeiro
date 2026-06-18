import Link from "next/link"
import { Wallet, BarChart3, Shield, ArrowRight } from "lucide-react"
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600"><Wallet className="h-5 w-5 text-white" /></div>
            <span className="font-bold text-gray-900">FinançasPro</span>
          </div>
          <div className="flex gap-3">
            <Link href="/auth/login" className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Entrar</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Começar grátis</Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">Controle suas finanças <span className="text-indigo-600">com inteligência</span></h1>
            <p className="mt-6 text-xl text-gray-500">Gerencie receitas, despesas, e veja seus relatórios financeiros em tempo real. Simples, rápido e seguro.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/auth/register" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700">Começar gratuitamente <ArrowRight className="h-5 w-5" /></Link>
              <Link href="/dashboard" className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Ver demonstração</Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Tudo que você precisa para organizar seu dinheiro</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100"><Wallet className="h-6 w-6 text-indigo-600" /></div><h3 className="mb-2 font-semibold text-gray-900">Gestão de Transações</h3><p className="text-sm text-gray-500">Registre receitas e despesas com categorias personalizadas.</p></div>
              <div className="rounded-xl bg-white p-6 shadow-sm"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100"><BarChart3 className="h-6 w-6 text-green-600" /></div><h3 className="mb-2 font-semibold text-gray-900">Relatórios Detalhados</h3><p className="text-sm text-gray-500">Gráficos e análises que mostram para onde vai seu dinheiro.</p></div>
              <div className="rounded-xl bg-white p-6 shadow-sm"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100"><Shield className="h-6 w-6 text-blue-600" /></div><h3 className="mb-2 font-semibold text-gray-900">Seguro e Privado</h3><p className="text-sm text-gray-500">Seus dados protegidos com criptografia de ponta.</p></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t px-6 py-6 text-center text-sm text-gray-400">© 2026 FinançasPro. Todos os direitos reservados.</footer>
    </div>
  )
}
