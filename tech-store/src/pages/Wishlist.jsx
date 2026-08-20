import { useWishlist } from '../context/WishlistContext'
import WishlistCard from '../components/WishlistCard'
import './Wishlist.css'

function Wishlist({ onNavigate }) {
  const { wishlistItems } = useWishlist()

  if (wishlistItems.length === 0) {
    return (
      <section className="section">
        <div className="container cart-empty">
          <h1 className="section-title">Your Wishlist is Empty</h1>
          <p>Save products you love by tapping the heart icon.</p>
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
        <h1 className="section-title">Your Wishlist</h1>
        <p className="products-count">{wishlistItems.length} items</p>

        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wishlist