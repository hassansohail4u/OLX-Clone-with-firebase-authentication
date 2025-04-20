// console.log("Hello World!");
import { auth } from "./firebaseConfig.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const div = document.querySelector("#container")
const input = document.querySelector("#user-input")
let products;
let searchProducts;
let filterProducts

function render() {
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
    console.log(res);
    products = res.products

    res.products.map((items , index) => {

    // console.log(items);
    

        div.innerHTML += `
     <div class="cart">
            <img class="products-image" src="${items.thumbnail}" alt="Product Thumbnail">
            <h5 class="product-title">${items.title}</h5>
            <h5 class="fs-5 my-2">Category : <span class="product-category">${items.category}</span> </h5>
            <p class="product-price">Price :<span class="price"> $${items.price} </span></p>
            <button class="product-btn me-2" onclick="seeMore(${items.id})">See More</button>
            <button class="product-btn" onclick="addToCart(${index})">Add to Cart</button>
        </div>`
    })
});
}

render()


input.addEventListener("input" , () => {
searchItems()
})

function searchItems() {
    console.log(input.value);

        fetch(`https://dummyjson.com/products/search?q=${input.value}`)
.then(res => res.json())
.then(res => {
    console.log(res);
    searchProducts = res.products
    div.innerHTML = ""
    
    res.products.map((items , index) => {
        div.innerHTML += `
        <div class="cart">
               <img class="products-image" src="${items.thumbnail}" alt="Product Thumbnail">
               <h5 class="product-title">${items.title}</h5>
               <h5 class="fs-5 my-2">Category : <span class="product-category">${items.category}</span> </h5>
               <p class="product-price">Price :<span class="price"> $${items.price} </span></p>
               <button class="product-btn me-2" onclick="seeMore(${items.id})">See More</button>
               <button class="product-btn" onclick="searchAddToCart(${index})">Add to Cart</button>
           </div>`
           
    })
}).catch((err) => {
    div.innerHTML += `<h1> Item Not Found </h1>`
})


}

console.log("Hello".toLowerCase());


function filter(btnName){
    console.log("Hello");
    
    div.innerHTML = ""

    var button = btnName.innerHTML
    // console.log(button.toLowerCase());
    

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
        // console.log(res);

    
        var filteredArr = res.products.filter((items) => items.category == button.toLowerCase())

        console.log(filteredArr);
        filterProducts = filteredArr
        
        filteredArr.map((items , index) => {
            div.innerHTML += `
            <div class="cart">
                   <img class="products-image" src="${items.thumbnail}" alt="Product Thumbnail">
                   <h5 class="product-title">${items.title}</h5>
                   <h5 class="fs-5 my-2">Category : <span class="product-category">${items.category}</span> </h5>
                   <p class="product-price">Price :<span class="price"> $${items.price} </span></p>
                   <button class="product-btn me-2" onclick="seeMore(${items.id})">See More</button>
                   <button class="product-btn" onclick="filterAddToCart(${index})">Add to Cart</button>
               </div>`
        })
      })
}

window.filter = filter;

function allItems(){
    div.innerHTML = ""

    render()
}

window.allItems = allItems;




function seeMore(id){
    console.log(id);
    

    localStorage.setItem("id" , id)
    location = "./singleCart.html"
}

window.seeMore = seeMore;

var OLXCartItems = JSON.parse(localStorage.getItem("OLXCartItems"))

if(OLXCartItems == null){
  var cartItems = []
}else{
  var cartItems = [...OLXCartItems]
}


function addProductToCart(productArray, index) {
    let product = productArray[index];

    const productIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (productIndex === -1) {
        product.quantity = 1;
        cartItems.push(product);
    } else {
        cartItems[productIndex].quantity += 1;
    }
    
    console.log(cartItems);

    var convertCartItemsArr = JSON.stringify(cartItems)
    localStorage.setItem("OLXCartItems" , convertCartItemsArr)


}


function addToCart(index) {
    addProductToCart(products, index);
}

function searchAddToCart(index) {
    addProductToCart(searchProducts, index);
}

function filterAddToCart(index) {
    addProductToCart(filterProducts, index);
}

const logOut = document.querySelector("#log-out")
logOut.addEventListener("click" , () => {

    signOut(auth).then(() => {
      window.location = "./index.html"
    }).catch((error) => {
        alert(error)
    });
})

window.addToCart = addToCart;
window.searchAddToCart = searchAddToCart;
window.filterAddToCart = filterAddToCart



const checkOut = document.querySelector("#check-out")

checkOut.addEventListener("click" , () => {

    window.location = "./checkout.html"
    
})

// var activeUsers = JSON.parse(localStorage.getItem("activeUsers"))
// console.log(activeUsers);
