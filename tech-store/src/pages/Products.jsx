import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'

function Products() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">All Products</h1>
        <p className="products-count">{products.length} products</p>
        <ProductGrid products={products} />
      </div>
    </section>
  )
}

export default Products