import { useCart } from '../context/CartContext'
import { categoryGradients } from '../utils/categoryColors'
import './CartItem.css'

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  const lineTotal = item.price * item.quantity

  return (
    <div className="cart-item glass">
      <div
        className="cart-item-image"
        style={{ background: categoryGradients[item.category] }}
      ></div>

      <div className="cart-item-info">
        <span className="cart-item-brand">{item.brand}</span>
        <h3>{item.name}</h3>
        <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')} each</p>
      </div>

      <div className="cart-item-qty">
        <button onClick={() => decreaseQuantity(item.id)} aria-label="Decrease quantity">
          −
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)} aria-label="Increase quantity">
          +
        </button>
      </div>

      <div className="cart-item-total">₹{lineTotal.toLocaleString('en-IN')}</div>

      <button
        className="cart-item-remove"
        onClick={() => removeFromCart(item.id)}
        aria-label="Remove item"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  )
}

export default CartItem