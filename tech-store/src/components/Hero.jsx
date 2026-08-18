import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-tag">New Generation, Redefined</span>
          <h1 className="hero-title">
            Technology.
            <br />
            <span className="hero-title-gradient">Refined.</span>
          </h1>
          <p className="hero-subtitle">
            Discover premium smartphones, laptops and accessories,
            engineered for those who expect more.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">Explore Collection</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>
          <div className="hero-card glass">
            <div className="hero-card-ring"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero