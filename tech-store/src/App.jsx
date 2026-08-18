import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'products' && <Products />}
      <Footer />
    </>
  )
}

export default App