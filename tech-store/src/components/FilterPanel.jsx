import './FilterPanel.css'

function FilterPanel({
  categories,
  selectedCategory,
  onCategoryChange,
  brands,
  selectedBrands,
  onBrandToggle,
  onClearFilters,
}) {
  return (
    <aside className="filter-panel glass">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="filter-clear" onClick={onClearFilters}>Clear All</button>
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <div className="filter-chips">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Brand</h4>
        <div className="filter-checkboxes">
          {brands.map((brand) => (
            <label key={brand} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandToggle(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default FilterPanel