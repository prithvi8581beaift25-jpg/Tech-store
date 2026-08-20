import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { calculateOrderTotals } from '../utils/pricing'
import './Checkout.css'

const paymentMethods = [
  { id: 'card', label: 'Credit / Debit Card' },
  { id: 'upi', label: 'UPI' },
  { id: 'cod', label: 'Cash on Delivery' },
]

function Checkout({ onNavigate }) {
  const { cartItems, subtotal, clearCart } = useCart()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null)

  const { discount, shipping, total } = calculateOrderTotals(subtotal)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    setOrderDetails({
      items: cartItems,
      total,
      orderId: `NEX${Date.now().toString().slice(-8)}`,
    })
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced && orderDetails) {
    return (
      <section className="section">
        <div className="container order-success">
          <div className="order-success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1 className="section-title">Order Placed Successfully</h1>
          <p>Thank you, {formData.fullName.split(' ')[0]}! Your order has been confirmed.</p>

          <div className="order-success-details glass">
            <div className="summary-row">
              <span>Order ID</span>
              <span>{orderDetails.orderId}</span>
            </div>
            <div className="summary-row">
              <span>Items</span>
              <span>{orderDetails.items.reduce((sum, i) => sum + i.quantity, 0)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row summary-total">
              <span>Total Paid</span>
              <span>₹{orderDetails.total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => onNavigate('home')}>
            Continue Shopping
          </button>
        </div>
      </section>
    )
  }

  if (cartItems.length === 0) {
    return (
      <section className="section">
        <div className="container cart-empty">
          <h1 className="section-title">Your Cart is Empty</h1>
          <p>Add some products before checking out.</p>
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
        <h1 className="section-title">Checkout</h1>

        <form className="checkout-layout" onSubmit={handlePlaceOrder}>
          <div className="checkout-form-section">
            <div className="checkout-block glass">
              <h3>Shipping Information</h3>

              <div className="form-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  required
                />
              </div>

              <div className="form-row form-row-3">
                <div className="form-field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    id="pincode"
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => handleChange('pincode', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="checkout-block glass">
              <h3>Payment Method</h3>

              <div className="payment-methods">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`payment-method-option ${paymentMethod === method.id ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                    />
                    {method.label}
                  </label>
                ))}
              </div>

              {paymentMethod === 'card' && (
                <div className="form-row card-extra-fields">
                  <div className="form-field">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cardExpiry">Expiry</label>
                    <input id="cardExpiry" type="text" placeholder="MM/YY" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cardCvv">CVV</label>
                    <input id="cardCvv" type="text" placeholder="123" required />
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="form-field card-extra-fields">
                  <label htmlFor="upiId">UPI ID</label>
                  <input id="upiId" type="text" placeholder="yourname@upi" required />
                </div>
              )}

              {paymentMethod === 'cod' && (
                <p className="cod-note">Pay with cash when your order is delivered.</p>
              )}
            </div>
          </div>

          <div className="cart-summary glass">
            <h3>Order Summary</h3>

            <div className="checkout-summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="checkout-summary-item">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

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

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <button type="submit" className="btn btn-primary summary-checkout">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Checkout