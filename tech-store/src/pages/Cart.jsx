import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { calculateOrderTotals, DISCOUNT_THRESHOLD } from '../utils/pricing'
import './Cart.css'

function Cart({ onNavigate }) {
  const { cartItems, subtotal } = useCart()

  const { discount, shipping, total } = calculateOrderTotals(subtotal)

  if (cartItems.length === 0) {
    return (
      <section className="section">
        <div className="container cart-empty">
          <h1 className="section-title">Your Cart is Empty</h1>
          <p>Looks like you haven't added anything yet.</p>
          <button className="btn btn-primary" onClick={() => onNavigate('products')}>
            Browse Products
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Your Cart</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary glass">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span className={discount > 0 ? 'summary-discount' : ''}>
                {discount > 0 ? `− ₹${discount.toLocaleString('en-IN')}` : '₹0'}
              </span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>

            {subtotal < DISCOUNT_THRESHOLD && (
              <p className="summary-hint">
                Add ₹{(DISCOUNT_THRESHOLD - subtotal).toLocaleString('en-IN')} more to unlock 5% off
              </p>
            )}

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <button
              className="btn btn-primary summary-checkout"
              onClick={() => onNavigate('checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart