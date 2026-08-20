import { useState } from 'react'
import Rating from '../components/Rating'
import ProductGrid from '../components/ProductGrid'
import { categoryGradients } from '../utils/categoryColors'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { products } from '../data/products'
import './ProductDetails.css'

function formatSpecLabel(key) {
  const spaced = key.replace(/([A-Z])/g, ' $1')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

function ProductDetails({ productId, onNavigate, onViewProduct }) {
  const [quantity, setQuantity] = useState(1)
  const { cartItems, addToCart } = useCart()
  const { isInWishlist, toggleWishlist } = useWishlist()

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <section className="section">
        <div className="container cart-empty">
          <h1 className="section-title">Product Not Found</h1>
          <p>This product may have been removed.</p>
          <button className="btn btn-primary" onClick={() => onNavigate('products')}>
            Browse Products
          </button>
        </div>
      </section>
    )
  }

  const cartItem = cartItems.find((item) => item.id === product.id)
  const inWishlist = isInWishlist(product.id)
  const isLowStock = product.stock > 0 && product.stock < 10

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1))
  const increaseQty = () => setQuantity((q) => q + 1)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <section className="section">
      <div className="container">
        <button className="details-back" onClick={() => onNavigate('products')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Products
        </button>

        <div className="details-layout">
          <div className="details-image-wrapper">
            <div
              className="details-image"
              style={{ background: categoryGradients[product.category] }}
            ></div>
          </div>

          <div className="details-info">
            <span className="product-brand">{product.brand}</span>
            <h1>{product.name}</h1>

            <Rating value={product.rating} reviews={product.reviews} />

            <div className="details-pricing">
              <span className="details-price">₹{product.price.toLocaleString('en-IN')}</span>
              {product.oldPrice > product.price && (
                <span className="details-oldprice">₹{product.oldPrice.toLocaleString('en-IN')}</span>
              )}
              {product.discount > 0 && (
                <span className="details-discount-badge">-{product.discount}%</span>
              )}
            </div>

            <p className="details-description">{product.description}</p>

            <div className="details-specs">
              <h3>Specifications</h3>
              <div className="specs-grid">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-row">
                    <span className="spec-label">{formatSpecLabel(key)}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className={`details-stock ${isLowStock ? 'low-stock' : ''}`}>
              {product.stock === 0
                ? 'Out of Stock'
                : isLowStock
                ? `Only ${product.stock} left in stock`
                : 'In Stock'}
            </p>

            <div className="details-actions">
              <div className="qty-selector">
                <button onClick={decreaseQty} aria-label="Decrease quantity">−</button>
                <span>{quantity}</span>
                <button onClick={increaseQty} aria-label="Increase quantity">+</button>
              </div>

              <button className="btn btn-primary details-add-btn" onClick={handleAddToCart}>
                {cartItem ? 'Add More to Cart' : 'Add to Cart'}
              </button>

              <button
                className={`details-wishlist-btn ${inWishlist ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Toggle wishlist"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={inWishlist ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-section">
            <h2 className="section-title">You May Also Like</h2>
            <ProductGrid products={relatedProducts} onViewProduct={onViewProduct} />
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductDetails