import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'products' && <Products searchTerm={searchTerm} />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      <Footer />
    </>
  )
}

export default App