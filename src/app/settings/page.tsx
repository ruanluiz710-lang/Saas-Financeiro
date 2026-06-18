export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Configurações</h1><p className="text-sm text-gray-500">Gerencie sua conta e preferências</p></div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-semibold text-gray-900">Perfil</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600">U</div>
            <div><p className="font-medium text-gray-900">Usuário</p><p className="text-sm text-gray-500">usuario@email.com</p></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">Nome</label><input type="text" defaultValue="Usuário" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
            <div><label className="mb-1.5 block text-sm font-medium text-gray-700">E-mail</label><input type="email" defaultValue="usuario@email.com" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div>
          </div>
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Salvar alterações</button>
        </div>
      </div>
    </div>
  )
}
