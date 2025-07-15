import { User, Settings, Heart, Package, CreditCard, HelpCircle, LogOut } from "lucide-react"
import { BottomNavigation } from "@/components/bottom-navigation"

const menuItems = [
  { icon: User, label: "Información Personal", href: "/profile/info" },
  { icon: Package, label: "Mis Pedidos", href: "/profile/orders" },
  { icon: Heart, label: "Lista de Deseos", href: "/profile/wishlist" },
  { icon: CreditCard, label: "Métodos de Pago", href: "/profile/payment" },
  { icon: Settings, label: "Configuración", href: "/profile/settings" },
  { icon: HelpCircle, label: "Ayuda y Soporte", href: "/profile/help" },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">María García</h1>
              <p className="text-gray-600">maria.garcia@email.com</p>
            </div>
          </div>
        </div>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <Icon className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">{item.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-6">
          <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors">
            <LogOut className="h-5 w-5" />
            Cerrar Sesión
          </button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
