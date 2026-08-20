import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProductId, setSelectedProductId] = useState(null)

  const viewProduct = (id) => {
    setSelectedProductId(id)
    setCurrentPage('product-details')
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} onViewProduct={viewProduct} />}
      {currentPage === 'products' && (
        <Products searchTerm={searchTerm} onViewProduct={viewProduct} />
      )}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'cart' && <Cart onNavigate={setCurrentPage} />}
      {currentPage === 'wishlist' && <Wishlist onNavigate={setCurrentPage} />}
      {currentPage === 'product-details' && (
        <ProductDetails
          key={selectedProductId}
          productId={selectedProductId}
          onNavigate={setCurrentPage}
          onViewProduct={viewProduct}
        />
      )}
      {currentPage === 'checkout' && <Checkout onNavigate={setCurrentPage} />}
      <Footer />
      <Toast />
    </>
  )
}

export default App