import './Rating.css'

function Rating({ value, reviews }) {
  const filledStars = Math.round(value)

  return (
    <div className="rating">
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            viewBox="0 0 24 24"
            fill={star <= filledStars ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
          </svg>
        ))}
      </div>
      <span className="rating-value">{value}</span>
      {reviews && <span className="rating-count">({reviews})</span>}
    </div>
  )
}

export default Rating