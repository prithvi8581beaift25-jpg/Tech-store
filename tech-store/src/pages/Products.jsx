import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'

function Products({ searchTerm }) {
  const query = searchTerm.trim().toLowerCase()

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    )
  })

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">All Products</h1>
        <p className="products-count">{filteredProducts.length} products</p>
        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  )
}

export default Products