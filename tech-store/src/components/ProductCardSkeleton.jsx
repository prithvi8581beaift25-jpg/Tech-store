import './ProductCardSkeleton.css'

function ProductCardSkeleton() {
  return (
    <div className="product-card-skeleton glass">
      <div className="skeleton-block skeleton-image"></div>
      <div className="skeleton-info">
        <div className="skeleton-block skeleton-line skeleton-line-sm"></div>
        <div className="skeleton-block skeleton-line skeleton-line-lg"></div>
        <div className="skeleton-block skeleton-line skeleton-line-sm"></div>
        <div className="skeleton-block skeleton-line skeleton-line-md"></div>
        <div className="skeleton-block skeleton-btn"></div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton