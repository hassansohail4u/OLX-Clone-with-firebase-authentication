const id = localStorage.getItem("id")
const container = document.querySelector("#single-container")
const reviewsContainer = document.querySelector(".reviews-container")

var singleproduct;
var OLXCartItems = JSON.parse(localStorage.getItem("OLXCartItems"))

if(OLXCartItems == null){
  var cartItems = []
}else{
  var cartItems = [...OLXCartItems]
}


fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(res => {
console.log(res);
  singleproduct = res

if (res.images > res.images[0]) { 

    container.innerHTML = `

         <div id="carouselExampleIndicators" class="carousel slide crousel-container">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${res.images[0]}" class="d-block crousel-picture" alt="Product Picture 1">
              </div>
              <div class="carousel-item">
                <img src="${res.images[1]}" class="d-block crousel-picture" alt="Product Picture 2">
              </div>
              <div class="carousel-item">
                <img src="${res.images[2]}" class="d-block crousel-picture" alt="No Picture Availible">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

           <div>
        <h3 class="my-3 single-headings">Title : <span class="single-title">${res.title}</span></h3>
        <h4 class="single-headings">Category : <span class="single-category font-weight-size">${res.category}</span></h4>
        <h4 class="my-3 single-headings">Description : <span class="single-paragraph">${res.description}</span></h4>
        <h4 class="single-headings">Return Policy : <span class="return-warranty-shipping font-weight-size">${res.returnPolicy}</span></h4>
        <h4 class="my-3 single-headings">Warranty :  <span class="return-warranty-shipping font-weight-size">${res.warrantyInformation}</span></h4>
        <h4 class="single-headings">Shipping :  <span class="return-warranty-shipping font-weight-size">${res.shippingInformation}</span></h4>
        <h4 class="my-3 single-headings">Rating : <span class="single-rating font-weight-size">${res.rating}%</span></h4>
        <h4 class="single-headings">Price :  <span class="single-rating font-weight-size">$${res.price}</span></h4>
        <button class="buy-now-btn" onclick="buyNow()">Buy Now</button><br>
        <button class="add-cart-btn" onclick="addToCart(${res.id})">Add to Cart</button>

    </div>`


    res.reviews.map((items) => {
      // console.log(items);
      
      reviewsContainer.innerHTML += `
      <div class="review-cart">
  <h4>Reviewer Name : <span class="reviews-all-text-styling">${items.reviewerName}</span></h4>
   <h4>Comment : <span class="reviews-all-text-styling">${items.comment}</span></h4>
  <h4>Rating : <span class="reviews-all-text-styling">${items.rating}</span></h4>
  </div>`
})


}else{
    container.innerHTML = `
    <div class="crousel-container">
    <img src="${res.images[0]}" class="crousel-picture" alt="Product Picture 1">
    </div>

      <div>
        <h3 class="my-3 single-headings">Title : <span class="single-title">${res.title}</span></h3>
        <h4 class="single-headings">Category : <span class="single-category font-weight-size">${res.category}</span></h4>
        <h4 class="my-3 single-headings">Description : <span class="single-paragraph">${res.description}</span></h4>
        <h4 class="single-headings">Return Policy : <span class="return-warranty-shipping font-weight-size">${res.returnPolicy}</span></h4>
        <h4 class="my-3 single-headings">Warranty :  <span class="return-warranty-shipping font-weight-size">${res.warrantyInformation}</span></h4>
        <h4 class="single-headings">Shipping :  <span class="return-warranty-shipping font-weight-size">${res.shippingInformation}</span></h4>
        <h4 class="my-3 single-headings">Rating : <span class="single-rating font-weight-size">${res.rating}%</span></h4>
        <h4 class="single-headings">Price :  <span class="single-rating font-weight-size">$${res.price}</span></h4>
        <button class="buy-now-btn" onclick="buyNow()">Buy Now</button><br>
        <button class="add-cart-btn" onclick="addToCart()">Add to Cart</button>

    </div>
  
    `

    res.reviews.map((items) => {
      // console.log(items);
      
      reviewsContainer.innerHTML += `
      <div class="review-cart">
  <h2>Reviewer Name : <span class="reviews-all-text-styling">${items.reviewerName}</span></h2>
   <h2>Comment : <span class="reviews-all-text-styling">${items.comment}</span></h2>
  <h2>Rating : <span class="reviews-all-text-styling">${items.rating}</span></h2>
  </div>`
})
}

})

function buyNow(){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your Ordered has been placed",
    showConfirmButton: false,
    timer: 1500
  });
}


function addToCart(){
  var productIndex = cartItems.findIndex(items => items.id == singleproduct.id)

  if (productIndex == -1) {
    console.log("If");
    
    singleproduct.quantity = 1
    cartItems.push(singleproduct)
    
  }else{
    console.log("Else");
    console.log(productIndex);
    
    
    cartItems[productIndex].quantity += 1

  }
  
  console.log(cartItems);

  var convertCartItemsArr = JSON.stringify(cartItems)
  localStorage.setItem("OLXCartItems" , convertCartItemsArr)
  
}

function backBtn(){
  

  location = "./home.html"
}
