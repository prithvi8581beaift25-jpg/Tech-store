import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import Promo from './components/Promo'
import Footer from './components/Footer'
import { products } from './data/products'

console.log(products.length, products)

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Promo />
      <Footer />
    </>
  )
}

export default App