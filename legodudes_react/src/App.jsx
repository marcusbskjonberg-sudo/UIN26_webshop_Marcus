import './style/lego.css'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import CategoryTitle from './components/CategoryTitle'
import Header from './components/Header'
import Nav from './components/Nav'
import Products from './components/Products'

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

  return (
    <div id="container">
      <Header setIsOpen={setIsOpen} cartQuantity={cartQuantity} />
      <Nav />
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart}/>
      </main>
      <Cart isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum} />
    </div>
  )
}

export default App
