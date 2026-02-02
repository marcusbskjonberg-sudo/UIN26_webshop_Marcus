import './style/lego.css'
import { products } from './assets/legodudes'

function App() {
  
  function Header(){
    return(
      <header>
            <h1>
              <a href="index.html">
              <img src="website_images/LD_logo.svg" alt="LEGOdudes" />
              </a>
            </h1>
            <button id="cart-button">
              <div id="cart-quantity">0</div>
              <img src="website_images/legocart.svg" alt="Handlevogn" />
            </button>
        </header>
    )
  }

  function Nav(){
    return(
    <nav>
            <a href="#">City</a>
            <a href="#">Ninjago</a>
            <a href="#">Castles & Knights</a>
            <a href="#">Marine & Pirates</a>
            <a href="#">Movie characters</a>
        </nav>
    )
  }

  function CategoryTitle(){
    return(
      <h2>Ninjago</h2>
    )
  }

  function Products({products}){
    return(
      <div id="product-list">
        {products.map(p => <ProductCard key={p.prodid} p={p}/>)}
        <ProductCard/>
      </div>
    )
  }

  function ProductCard({p}){
    return(
      <article class="product-card">
        <img src={'website_images/PROD_${p.imagefile}'} alt={p.title} />
        <a href="#">${p.category}</a>
        <h3>${p.title}</h3>
        <p>Kr. ${p.price},-</p>
        <button onClick="addToCart(${p.prodid})">Legg til handlevogn</button>
      </article>
    )
  }

 

  return (
    <>
      <div id="container">
      <Header/>
      <Nav/>
      <main>
        <CategoryTitle/>
        <Products products={products}/>
      </main>
      </div>
    </>
  )
}

export default App
