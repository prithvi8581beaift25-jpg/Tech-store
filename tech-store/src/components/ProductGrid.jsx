import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products, onViewProduct }) {
  if (products.length === 0) {
    return <p className="product-grid-empty">No products found.</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onViewProduct={onViewProduct} />
      ))}
    </div>
  )
}

export default ProductGrid