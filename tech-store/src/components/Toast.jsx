import { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import './Toast.css'

function Toast() {
  const { toastMessage, clearToast } = useCart()

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearToast()
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [toastMessage, clearToast])

  if (!toastMessage) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span>{toastMessage}</span>
    </div>
  )
}

export default Toast