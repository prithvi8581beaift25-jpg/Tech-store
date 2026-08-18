function CategoryCard({ category }) {
  return (
    <a href="#" className="category-card glass">
      <div className="category-icon" style={{ background: category.gradient }}>
        {category.emoji}
      </div>
      <h3>{category.name}</h3>
      <p>{category.count} Products</p>
    </a>
  )
}

export default CategoryCard