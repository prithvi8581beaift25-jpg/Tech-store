import Rating from './Rating'
import { categoryGradients } from '../utils/categoryColors'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ product }) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart()

  const cartItem = cartItems.find((item) => item.id === product.id)

  return (
    <div className="product-card glass">
      <div className="product-image-wrapper">
        <div
          className="product-image"
          style={{ background: categoryGradients[product.category] }}
        ></div>

        {product.discount > 0 ? (
          <span className="product-badge">-{product.discount}%</span>
        ) : product.newArrival ? (
          <span className="product-badge product-badge-new">NEW</span>
        ) : null}
      </div>

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>

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