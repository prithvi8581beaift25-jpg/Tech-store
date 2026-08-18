import './FeaturedProducts.css'

const featuredItems = [
  { id: 1, name: 'Nexora Phone Pro', category: 'Smartphone', price: 79999, gradient: 'linear-gradient(135deg, #4f8dff, #9333ea)' },
  { id: 2, name: 'Nexora Book Air', category: 'Laptop', price: 94999, gradient: 'linear-gradient(135deg, #9333ea, #ef4444)' },
  { id: 3, name: 'Nexora Buds Max', category: 'Headphones', price: 24999, gradient: 'linear-gradient(135deg, #22c55e, #4f8dff)' },
  { id: 4, name: 'Nexora Watch Ultra', category: 'Smartwatch', price: 34999, gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
]

function FeaturedProducts() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-grid">
          {featuredItems.map((item) => (
            <div key={item.id} className="featured-card glass">
              <div className="featured-image" style={{ background: item.gradient }}></div>
              <span className="featured-category">{item.category}</span>
              <h3>{item.name}</h3>
              <p className="featured-price">₹{item.price.toLocaleString('en-IN')}</p>
              <button className="btn btn-secondary featured-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts