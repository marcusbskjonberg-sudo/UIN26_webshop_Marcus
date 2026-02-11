import './style/lego.css'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import CategoryTitle from './components/CategoryTitle'
import Header from './components/Header'
import Nav from './components/Nav'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

//-  npm i react-router-dom --save-dev

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)
  
  console.log("cart", cart)

  useEffect(()=>{
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

    setCartQuantity(totalQuantity)

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    setTotalSum(total)
  },[cart])  

  function Page(){
    return(
      <main>
      <CategoryTitle />
      <Products products={products} setCart={setCart}/>
      </main>
    )
  }

  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
      <Routes>
        <Route index element={<Page />} />
        <Route path='city' element={<CategoryTitle title="City"/>}/>
        <Route path='ninjago' element={<CategoryTitle title="Ninjago"/>}/>
      </Routes>
    </Layout>
  )
}

export default App
