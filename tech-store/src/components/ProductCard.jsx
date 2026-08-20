import Rating from './Rating'
import { categoryGradients } from '../utils/categoryColors'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import './ProductCard.css'

function ProductCard({ product, onViewProduct }) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart()
  const { isInWishlist, toggleWishlist } = useWishlist()

  const cartItem = cartItems.find((item) => item.id === product.id)
  const inWishlist = isInWishlist(product.id)

  const handleWishlistClick = (e) => {
    e.stopPropagation()
    toggleWishlist(product)
  }

  return (
    <div className="product-card glass">
      <div className="product-image-wrapper" onClick={() => onViewProduct(product.id)}>
        <div
          className="product-image"
          style={{ background: categoryGradients[product.category] }}
        ></div>

        {product.discount > 0 ? (
          <span className="product-badge">-{product.discount}%</span>
        ) : product.newArrival ? (
          <span className="product-badge product-badge-new">NEW</span>
        ) : null}

        <button
          className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
          onClick={handleWishlistClick}
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

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name" onClick={() => onViewProduct(product.id)}>
          {product.name}
        </h3>

        <Rating value={product.rating} reviews={product.reviews} />

        <div className="product-pricing">
          <span className="product-price">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.oldPrice > product.price && (
            <span className="product-old-price">
              ₹{product.oldPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {cartItem ? (
          <div className="product-qty-stepper">
            <button onClick={() => decreaseQuantity(product.id)} aria-label="Decrease quantity">
              −
            </button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => increaseQuantity(product.id)} aria-label="Increase quantity">
              +
            </button>
          </div>
        ) : (
          <button className="btn btn-primary product-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard