import Rating from './Rating'
import { categoryGradients } from '../utils/categoryColors'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card glass">
      <div className="product-image-wrapper">
        <div
          className="product-image"
          style={{ background: categoryGradients[product.category] }}
        ></div>

        {product.discount > 0 ? (
          <span className="product-badge">-{product.discount}%</span>
        ) : product.newArrival ? (
          <span className="product-badge product-badge-new">NEW</span>
        ) : null}
      </div>

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>

        <Rating value={product.rating} reviews={product.reviews} />

        <div className="product-pricing">
          <span className="product-price">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.oldPrice > product.price && (
            <span className="product-old-price">
              ₹{product.oldPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        <button className="btn btn-primary product-btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard