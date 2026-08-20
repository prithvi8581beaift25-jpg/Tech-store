import Rating from './Rating'
import { categoryGradients } from '../utils/categoryColors'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import './WishlistCard.css'

function WishlistCard({ product }) {
  const { addToCart } = useCart()
  const { removeFromWishlist } = useWishlist()

  const handleMoveToCart = () => {
    addToCart(product)
    removeFromWishlist(product.id)
  }

  return (
    <div className="wishlist-card glass">
      <button
        className="wishlist-card-remove"
        onClick={() => removeFromWishlist(product.id)}
        aria-label="Remove from wishlist"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div
        className="wishlist-card-image"
        style={{ background: categoryGradients[product.category] }}
      ></div>

      <div className="wishlist-card-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>

        <Rating value={product.rating} reviews={product.reviews} />

        <div className="product-pricing">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.oldPrice > product.price && (
            <span className="product-old-price">
              ₹{product.oldPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        <button className="btn btn-primary product-btn" onClick={handleMoveToCart}>
          Move to Cart
        </button>
      </div>
    </div>
  )
}

export default WishlistCard