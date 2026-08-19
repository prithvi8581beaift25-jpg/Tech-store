import { useState } from 'react'
import FilterPanel from '../components/FilterPanel'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'
import './Products.css'

const allCategories = ['All', ...new Set(products.map((p) => p.category))]
const allBrands = [...new Set(products.map((p) => p.brand))].sort()

function Products({ searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const query = searchTerm.trim().toLowerCase()

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedBrands([])
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand)

    return matchesSearch && matchesCategory && matchesBrand
  })

  return (
    <section className="section">
      <div className="container">
        <div className="products-header">
          <h1 className="section-title">All Products</h1>
          <button
            className="btn btn-secondary filter-toggle"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filters
          </button>
        </div>

        <p className="products-count">{filteredProducts.length} products</p>

        <div className="products-layout">
          <div className={`filter-panel-wrapper ${isFilterOpen ? 'open' : ''}`}>
            <FilterPanel
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              brands={allBrands}
              selectedBrands={selectedBrands}
              onBrandToggle={toggleBrand}
              onClearFilters={clearFilters}
            />
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  )
}

export default Products