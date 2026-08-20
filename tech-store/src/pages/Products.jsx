import { useState } from 'react'
import FilterPanel from '../components/FilterPanel'
import SortDropdown from '../components/SortDropdown'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'
import './Products.css'

const allCategories = ['All', ...new Set(products.map((p) => p.category))]
const allBrands = [...new Set(products.map((p) => p.brand))].sort()

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under ₹10,000', min: 0, max: 10000 },
  { label: '₹10,000 – ₹30,000', min: 10000, max: 30000 },
  { label: '₹30,000 – ₹75,000', min: 30000, max: 75000 },
  { label: '₹75,000 – ₹1,50,000', min: 75000, max: 150000 },
  { label: 'Above ₹1,50,000', min: 150000, max: Infinity },
]

const ratingOptions = [0, 4.5, 4, 3.5]

function Products({ searchTerm, onViewProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('All')
  const [selectedRating, setSelectedRating] = useState(0)
  const [sortOption, setSortOption] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const query = searchTerm.trim().toLowerCase()
  const activePriceRange = priceRanges.find((r) => r.label === selectedPriceLabel)

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedBrands([])
    setSelectedPriceLabel('All')
    setSelectedRating(0)
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesPrice =
      product.price >= activePriceRange.min && product.price <= activePriceRange.max
    const matchesRating = product.rating >= selectedRating

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price
    if (sortOption === 'price-desc') return b.price - a.price
    if (sortOption === 'rating-desc') return b.rating - a.rating
    if (sortOption === 'newest') return b.newArrival - a.newArrival
    return 0
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

        <div className="products-toolbar">
          <p className="products-count">{sortedProducts.length} products</p>
          <SortDropdown value={sortOption} onChange={setSortOption} />
        </div>

        <div className="products-layout">
          <div className={`filter-panel-wrapper ${isFilterOpen ? 'open' : ''}`}>
            <FilterPanel
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              brands={allBrands}
              selectedBrands={selectedBrands}
              onBrandToggle={toggleBrand}
              priceRanges={priceRanges}
              selectedPriceLabel={selectedPriceLabel}
              onPriceRangeChange={setSelectedPriceLabel}
              ratingOptions={ratingOptions}
              selectedRating={selectedRating}
              onRatingChange={setSelectedRating}
              onClearFilters={clearFilters}
            />
          </div>

          <ProductGrid products={sortedProducts} onViewProduct={onViewProduct} />
        </div>
      </div>
    </section>
  )
}

export default Products