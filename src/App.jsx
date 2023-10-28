import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Home from './components/Home/Home'

export default function App() {
  return (
    <>
     <Navbar />
     <Products />
     <Home />
     <Footer />
    </>
  )
}
