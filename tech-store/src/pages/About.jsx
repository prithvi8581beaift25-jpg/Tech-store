import './About.css'

function About() {
  return (
    <section className="section">
      <div className="container about-page">
        <span className="hero-tag">Our Story</span>
        <h1 className="section-title">About NEXORA</h1>
        <p className="about-lead">
          NEXORA was founded on a simple idea: technology should feel as good as it performs.
          We curate premium smartphones, laptops, and accessories from the world's best brands,
          bringing them together in one refined, trustworthy destination.
        </p>

        <div className="about-grid">
          <div className="about-card glass">
            <h3>Our Mission</h3>
            <p>To make discovering and owning premium technology effortless, honest and enjoyable.</p>
          </div>
          <div className="about-card glass">
            <h3>Quality First</h3>
            <p>Every product on NEXORA is sourced from authorized channels, backed by full manufacturer warranty.</p>
          </div>
          <div className="about-card glass">
            <h3>Customer Focused</h3>
            <p>From browsing to checkout, we design every step around a smooth, transparent experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About