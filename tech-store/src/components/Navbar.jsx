import { useState } from 'react'
import './Navbar.css'

function Navbar({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
  ]

  const handleNavigate = (page) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar glass">
      <div className="container navbar-inner">
        <button className="navbar-logo" onClick={() => handleNavigate('home')}>
          NEXORA
        </button>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                className={currentPage === link.page ? 'active' : ''}
                onClick={() => handleNavigate(link.page)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="cart-badge">0</span>
          </button>

          <button
            className="icon-btn menu-toggle"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.page}>
                <button onClick={() => handleNavigate(link.page)}>{link.label}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar