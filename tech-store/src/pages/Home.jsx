import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Promo from '../components/Promo'

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Categories />
      <FeaturedProducts />
      <Promo />
    </>
  )
}

export default Home