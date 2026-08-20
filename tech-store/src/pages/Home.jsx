import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Promo from '../components/Promo'

function Home({ onNavigate, onViewProduct }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Categories />
      <FeaturedProducts onViewProduct={onViewProduct} />
      <Promo />
    </>
  )
}

export default Home