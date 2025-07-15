import { products } from "@/lib/products"
import { ProductGrid } from "@/components/product-grid"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Fashion Store</h1>
          <p className="text-gray-600 text-sm">Descubre nuestra colección</p>
        </div>
      </header>

      <main>
        <ProductGrid products={products} />
      </main>

      <BottomNavigation />
    </div>
  )
}
