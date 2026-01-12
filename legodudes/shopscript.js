document.getElementById("cart-button").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("hidden")
})

//Test-funksjon for produkt
function fetchProducts(){
    products.map(p => console.log(p))
}

fetchProducts()