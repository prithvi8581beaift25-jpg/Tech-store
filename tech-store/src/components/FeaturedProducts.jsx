import ProductGrid from './ProductGrid'
import { products } from '../data/products'

function FeaturedProducts({ onViewProduct }) {
  const featuredItems = products.filter((product) => product.featured)

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <ProductGrid products={featuredItems} onViewProduct={onViewProduct} />
      </div>
    </section>
  )
}

export default FeaturedProducts