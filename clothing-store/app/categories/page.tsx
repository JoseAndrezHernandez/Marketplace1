import Link from "next/link"
import { categories, getProductsByCategory } from "@/lib/products"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Categorías</h1>
          <p className="text-gray-600 text-sm">Explora por categoría</p>
        </div>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const productCount = getProductsByCategory(category.id).length

            return (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{productCount} productos</p>
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
