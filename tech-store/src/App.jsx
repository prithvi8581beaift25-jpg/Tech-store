import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import Promo from './components/Promo'
import Footer from './components/Footer'
import ProductGrid from './components/ProductGrid'
import { products } from './data/products'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />

      <section className="section">
        <div className="container">
          <h2 className="section-title">All Products (Test)</h2>
          <ProductGrid products={products} />
        </div>
      </section>

      <Promo />
      <Footer />
    </>
  )
}

export default App