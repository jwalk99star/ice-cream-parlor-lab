// SECTION global variables

const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 1.25,
  quantity: 0
}]


// SECTION functions
// ✅get console log from vanilla button
// ☑️get vanilla from array & add to cart
// ✅☑️increase item quantity by 1 in cart

function addVanillaToCart() {  
  let vanilla = iceCream.find(iceCreamFlavor => iceCreamFlavor.name == 'Vanilla')  
  vanilla.quantity++
  console.log('Vanilla clicked!', vanilla)
  drawCart()
}

function drawCart() {
  let cartStringHTML = ''
    iceCream.forEach(iceCreamFlavor => {      
      if (iceCreamFlavor.quantity > 0) {
        cartStringHTML += `
        <li>
        <div class="d-flex justify-content-between">
        <span>${iceCreamFlavor.name} x${iceCreamFlavor.quantity}</span>
        <span>${iceCreamFlavor.price.toFixed(2)}</span>
        </div>
        </li>
        `
        console.log('ice cream in the cart!');
      }
    })
    const cartElement = document.getElementById('cart')
    cartElement.innerHTML = cartStringHTML
    drawTotal()
  }

  function drawTotal() {
    let cartSum = 0
    iceCream.forEach(iceCreamFlavor => {
      cartSum += iceCreamFlavor.price * iceCreamFlavor.quantity
    })
    let cartTotalElement = document.getElementById('cartTotal')
    cartTotalElement.innerText = cartSum.toFixed(2).toString()
  }





































// function drawCart() {
  
//   let stringOfMenuItemsHTML += ''
  
//   menu.forEach(menuItem => {    
    
//     if (menuItem.quantity > 0) {
//       stringOfMenuItemsHTML += menuItem.name += ' 
//       // li from html
//       '
//       console.log(menuItem)
//     }
//   })
  
//   console.log('stringOfMenuItems');
  
//   const cartElement = document.getElementById('cart')
  
//   cartElement?.innerHTML = stringOfMenuItemsHTML
  
//   drawTotal()
  
// }


// function drawTotal() {
  
//   let cartTotalElement = document.getElementById('cartTotal')
  
//   let cartSum = 0
  
//   menu.forEach(menuItem => {
//     cartSum += menuItem.price * menuItem.quantity
//   })
  
  
//   cartTotalElement?.innerHTML = cartSum.toFixed(2).toString()
// }



// function checkOut(){
//   const wantsToCheckOut = window.confirm("Are You Certain?")
//   if(!wantsToCheckOut) {
//     return
//   }
  
//   menu.forEach(menuItem => menuItem.quantity = 0)
  
//   drawCart()
  
  // sweet alert js code like   Swal.fire etc...
  
// }



//   cartElement?.innerHTML = /**html**/
//   `
//   <div></div>
//   <div></div>
//   <div></div>
//   <div></div>
//   <div></div>
//   `
// }

// SECTION addItemToCart

// itemName was param for addItemToCart function
// function addItemToCart(){
  
  //   let Cookie Dough = iceCream.find(menuItem => menuItem.name == 'Cookie Dough')
//   iceCream.quantity++
//   console.log('Cookie Dough');
  
//   let Vanilla = iceCream.find(menuItem => menuItem.name == 'Vanilla')
//   iceCream.quantity++
//   console.log('Vanilla');
  
//   let Strawberry = iceCream.find(menuItem => menuItem.name == 'Strawberry')
//   iceCream.quantity++
//   console.log('Strawberry');
  
//   console.log(`${iceCream} added to cart`);
//   drawCart()
// }






// SECTION CONES
// let sugarCone = menu.find(menuItem => menuItem.name == 'sugar')
// item.quantity++
// console.log('sugar');

// let plainCone = menu.find(menuItem => menuItem.name == 'plain')
// item.quantity++
// console.log('plain');

// let waffleCone = menu.find(menuItem => menuItem.name == 'waffle')
// item.quantity++
// console.log('waffle');