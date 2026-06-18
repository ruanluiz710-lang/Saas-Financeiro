"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ArrowLeftRight, BarChart3, Settings, LogOut, Wallet } from "lucide-react"
const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/transactions", label: "Transações", icon: ArrowLeftRight },
  { href: "/reports", label: "Relatórios", icon: BarChart3 },
  { href: "/settings", label: "Configurações", icon: Settings },
]
export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white px-4 py-6">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
          <Wallet className="h-5 w-5 text-white" />
        </div>
        <span className="text-lg font-bold text-gray-900">FinançasPro</span>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname === href ? "bg-indigo-50 text-indigo-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>
            <Icon className="h-5 w-5" />{label}
          </Link>
        ))}
      </nav>
      <div className="border-t pt-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <LogOut className="h-5 w-5" />Sair
        </button>
      </div>
    </aside>
  )
}
