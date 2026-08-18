import CategoryCard from './CategoryCard'
import './Categories.css'

const categories = [
  { name: 'Smartphones', emoji: '📱', count: 12, gradient: 'linear-gradient(135deg, #4f8dff, #9333ea)' },
  { name: 'Laptops', emoji: '💻', count: 8, gradient: 'linear-gradient(135deg, #9333ea, #ef4444)' },
  { name: 'Tablets', emoji: '📲', count: 6, gradient: 'linear-gradient(135deg, #4f8dff, #22c55e)' },
  { name: 'Headphones', emoji: '🎧', count: 9, gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
  { name: 'Smartwatches', emoji: '⌚', count: 7, gradient: 'linear-gradient(135deg, #22c55e, #4f8dff)' },
  { name: 'Gaming', emoji: '🎮', count: 8, gradient: 'linear-gradient(135deg, #ef4444, #9333ea)' },
]

function Categories() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories