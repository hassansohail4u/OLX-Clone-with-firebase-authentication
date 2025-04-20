var OLXCartItems = JSON.parse(localStorage.getItem("OLXCartItems"))
console.log(OLXCartItems);

const countryName = document.querySelector("#country-name")
const cityName = document.querySelector("#city-name")
const townName = document.querySelector("#town-name")
const table = document.querySelector(".cart-table")
const calculateShippingBtn = document.querySelector("#calculate-shipping-btn")
const postalCode = document.querySelector("#postal-code")
const shippingRate = document.querySelector("#shipping-estimate")


OLXCartItems.map((items) => {
    console.log(items);
    
    table.innerHTML += `<tr class="cart-row">
    <td class="text-center image"><img src="${items.thumbnail}" alt="Product Picture" class="product-img"></td>
    <td class="text-center name">${items.title}</td>
    <td class="text-center price">$${items.price}</td>
    <td class="text-center quantity"><i class="fa-solid fa-minus icon me-2"></i><span class="quantity-num"> ${items.quantity} </span><i class="fa-solid fa-plus icon ms-2"></i></td>
    <td class="text-center total">$${items.price * items.quantity}</td>
    <td class="text-center remove"><i class="fa-solid fa-trash-alt delete-icon"></i></td>
    </tr>`
})






var countriesDetails = [
    {
      "country": "Pakistan",
      "cities": [
        {
          "city": "Karachi",
          "towns": [
            { "town": "Korangi", "postal_code": "74900", "shipping_rate": "$15.00" },
            { "town": "Gulshan-e-Iqbal", "postal_code": "75300", "shipping_rate": "$12.00" }
          ]
        },
        {
          "city": "Lahore",
          "towns": [
            { "town": "Gulberg", "postal_code": "54000", "shipping_rate": "$14.00" },
            { "town": "Defence", "postal_code": "54792", "shipping_rate": "$13.00" }
          ]
        },
        {
          "city": "Islamabad",
          "towns": [
            { "town": "F-6", "postal_code": "44000", "shipping_rate": "$16.00" },
            { "town": "G-10", "postal_code": "44010", "shipping_rate": "$15.00" }
          ]
        },
        {
          "city": "Rawalpindi",
          "towns": [
            { "town": "Saddar", "postal_code": "46000", "shipping_rate": "$17.00" },
            { "town": "Murree Road", "postal_code": "46010", "shipping_rate": "$18.00" }
          ]
        }
      ]
    },
    {
      "country": "India",
      "cities": [
        {
          "city": "New Delhi",
          "towns": [
            { "town": "Connaught Place", "postal_code": "110001", "shipping_rate": "$20.00" },
            { "town": "Chandni Chowk", "postal_code": "110006", "shipping_rate": "$18.00" }
          ]
        },
        {
          "city": "Mumbai",
          "towns": [
            { "town": "Andheri", "postal_code": "400053", "shipping_rate": "$25.00" },
            { "town": "Bandra", "postal_code": "400050", "shipping_rate": "$22.00" }
          ]
        },
        {
          "city": "Bangalore",
          "towns": [
            { "town": "Indiranagar", "postal_code": "560038", "shipping_rate": "$18.00" },
            { "town": "Koramangala", "postal_code": "560034", "shipping_rate": "$19.00" }
          ]
        },
        {
          "city": "Chennai",
          "towns": [
            { "town": "T. Nagar", "postal_code": "600017", "shipping_rate": "$21.00" },
            { "town": "Adyar", "postal_code": "600020", "shipping_rate": "$22.00" }
          ]
        }
      ]
    },
    {
      "country": "USA",
      "cities": [
        {
          "city": "New York",
          "towns": [
            { "town": "Brooklyn", "postal_code": "11201", "shipping_rate": "$30.00" },
            { "town": "Manhattan", "postal_code": "10001", "shipping_rate": "$28.00" }
          ]
        },
        {
          "city": "Los Angeles",
          "towns": [
            { "town": "Santa Monica", "postal_code": "90401", "shipping_rate": "$22.00" },
            { "town": "Hollywood", "postal_code": "90028", "shipping_rate": "$24.00" }
          ]
        },
        {
          "city": "Chicago",
          "towns": [
            { "town": "Lincoln Park", "postal_code": "60614", "shipping_rate": "$20.00" },
            { "town": "Downtown", "postal_code": "60601", "shipping_rate": "$23.00" }
          ]
        },
        {
          "city": "San Francisco",
          "towns": [
            { "town": "Mission District", "postal_code": "94110", "shipping_rate": "$25.00" },
            { "town": "Fisherman’s Wharf", "postal_code": "94133", "shipping_rate": "$27.00" }
          ]
        }
      ]
    },
    {
      "country": "Canada",
      "cities": [
        {
          "city": "Toronto",
          "towns": [
            { "town": "Scarborough", "postal_code": "M1S", "shipping_rate": "$18.00" },
            { "town": "Yorkville", "postal_code": "M5R", "shipping_rate": "$20.00" }
          ]
        },
        {
          "city": "Vancouver",
          "towns": [
            { "town": "Kitsilano", "postal_code": "V6K", "shipping_rate": "$21.00" },
            { "town": "Downtown", "postal_code": "V6B", "shipping_rate": "$22.00" }
          ]
        },
        {
          "city": "Montreal",
          "towns": [
            { "town": "Plateau", "postal_code": "H2T", "shipping_rate": "$23.00" },
            { "town": "Old Montreal", "postal_code": "H2Y", "shipping_rate": "$25.00" }
          ]
        },
        {
          "city": "Ottawa",
          "towns": [
            { "town": "ByWard Market", "postal_code": "K1N", "shipping_rate": "$24.00" },
            { "town": "Centretown", "postal_code": "K2P", "shipping_rate": "$22.00" }
          ]
        }
      ]
    },
    {
      "country": "UK",
      "cities": [
        {
          "city": "London",
          "towns": [
            { "town": "Chelsea", "postal_code": "SW3", "shipping_rate": "$20.00" },
            { "town": "Camden", "postal_code": "NW1", "shipping_rate": "$18.00" }
          ]
        },
        {
          "city": "Manchester",
          "towns": [
            { "town": "Didsbury", "postal_code": "M20", "shipping_rate": "$19.00" },
            { "town": "Salford", "postal_code": "M5", "shipping_rate": "$17.00" }
          ]
        },
        {
          "city": "Birmingham",
          "towns": [
            { "town": "Digbeth", "postal_code": "B5", "shipping_rate": "$18.00" },
            { "town": "Sutton Coldfield", "postal_code": "B73", "shipping_rate": "$20.00" }
          ]
        },
        {
          "city": "Liverpool",
          "towns": [
            { "town": "Albert Dock", "postal_code": "L3", "shipping_rate": "$21.00" },
            { "town": "Toxteth", "postal_code": "L8", "shipping_rate": "$22.00" }
          ]
        }
      ]
    },
    {
      "country": "Australia",
      "cities": [
        {
          "city": "Sydney",
          "towns": [
            { "town": "Bondi", "postal_code": "2026", "shipping_rate": "$25.00" },
            { "town": "Surry Hills", "postal_code": "2010", "shipping_rate": "$23.00" }
          ]
        },
        {
          "city": "Melbourne",
          "towns": [
            { "town": "Fitzroy", "postal_code": "3065", "shipping_rate": "$22.00" },
            { "town": "St Kilda", "postal_code": "3182", "shipping_rate": "$24.00" }
          ]
        },
        {
          "city": "Brisbane",
          "towns": [
            { "town": "South Bank", "postal_code": "4101", "shipping_rate": "$20.00" },
            { "town": "New Farm", "postal_code": "4005", "shipping_rate": "$21.00" }
          ]
        },
        {
          "city": "Perth",
          "towns": [
            { "town": "Fremantle", "postal_code": "6160", "shipping_rate": "$22.00" },
            { "town": "Subiaco", "postal_code": "6008", "shipping_rate": "$23.00" }
          ]
        }
      ]
    },
    {
      "country": "Germany",
      "cities": [
        {
          "city": "Berlin",
          "towns": [
            { "town": "Mitte", "postal_code": "10115", "shipping_rate": "$18.00" },
            { "town": "Prenzlauer Berg", "postal_code": "10405", "shipping_rate": "$16.00" }
          ]
        },
        {
          "city": "Munich",
          "towns": [
            { "town": "Altstadt", "postal_code": "80331", "shipping_rate": "$20.00" },
            { "town": "Schwabing", "postal_code": "80802", "shipping_rate": "$19.00" }
          ]
        },
        {
          "city": "Hamburg",
          "towns": [
            { "town": "St. Pauli", "postal_code": "20359", "shipping_rate": "$17.00" },
            { "town": "Eimsbüttel", "postal_code": "20259", "shipping_rate": "$18.00" }
          ]
        },
        {
          "city": "Frankfurt",
          "towns": [
            { "town": "Sachsenhausen", "postal_code": "60594", "shipping_rate": "$19.00" },
            { "town": "Bockenheim", "postal_code": "60486", "shipping_rate": "$21.00" }
          ]
        }
      ]
    }
  ]
  
  
  

  
  
  
  
  
  
  
  
  


// console.log(counriesDetails);

  countriesDetails.map((items) => {    
    countryName.innerHTML += `<option value ="${items.country}"> ${items.country}</option>`
    

  })


  countryName.addEventListener("change" , (e) => {
    cityName.innerHTML = `<option class="d-none">Select Your City</option>`
    townName.innerHTML = `<option class="d-none">Select Your Town</option>`

    console.log(countryName.value);
    console.log(countriesDetails.findIndex(items => items.country == countryName.value));
  
    const countryIndex = countriesDetails.findIndex(items => items.country == countryName.value)
   
    

    countriesDetails[countryIndex].cities.map((items) => {
      
      cityName.innerHTML += `<option value="${items.city}">${items.city}</option>`
      
    })
  })





  cityName.addEventListener("change" , (e) => {
    townName.innerHTML = `<option class="d-none">Select Your Town</option>`
    

    const countryIndex = countriesDetails.findIndex(items => items.country == countryName.value)
    const cityIndex = countriesDetails[countryIndex].cities.findIndex(items => items.city == cityName.value);
    
    
    countriesDetails[countryIndex].cities[cityIndex].towns.map((items) => {
      townName.innerHTML += `<option> ${items.town} </option>`
      
    })
  
  })


  townName.addEventListener("change" , () => {

    console.log(townName.value);
    
  })

  calculateShippingBtn.addEventListener("click" , () => {
    const countryIndex = countriesDetails.findIndex(items => items.country == countryName.value)
    const cityIndex = countriesDetails[countryIndex].cities.findIndex(items => items.city == cityName.value);
    const townIndex = countriesDetails[countryIndex].cities[cityIndex].towns.findIndex(items => items.town == townName.value)
    

    const countriesPostalCode = countriesDetails[countryIndex].cities[cityIndex].towns[townIndex].postal_code;
    const countriesShippingRate = countriesDetails[countryIndex].cities[cityIndex].towns[townIndex].shipping_rate;

    if(countryName.value == "Select Your Country" && cityName.value == "Select Your City" && townName.value == "Select Your Town" && postalCode.value == "" ) {
      alert("Please fill the Queries")
    }
    else {
      if (countriesPostalCode == postalCode.value) {
        shippingRate.innerHTML = `Shipping Rate: ${countriesShippingRate}`
        
      }else{
        alert("Invalid Postal Code")
      }
    }

  })
