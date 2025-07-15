import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getProductsByCategory, categories } from "@/lib/products"
import { ProductGrid } from "@/components/product-grid"
import { BottomNavigation } from "@/components/bottom-navigation"

interface CategoryPageProps {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const products = getProductsByCategory(params.id)
  const category = categories.find((cat) => cat.id === params.id)

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Categoría no encontrada</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center px-4 py-4">
          <Link href="/categories" className="p-2 -ml-2 mr-2">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
            <p className="text-gray-600 text-sm">{products.length} productos</p>
          </div>
        </div>
      </header>

      <main>
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-600">No hay productos en esta categoría</p>
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  )
}
