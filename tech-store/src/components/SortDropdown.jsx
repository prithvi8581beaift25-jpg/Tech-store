import './SortDropdown.css'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating: High to Low', value: 'rating-desc' },
  { label: 'Newest First', value: 'newest' },
]

function SortDropdown({ value, onChange }) {
  return (
    <select
      className="sort-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Sort products"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          Sort: {option.label}
        </option>
      ))}
    </select>
  )
}

export default SortDropdown