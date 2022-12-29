
const addToCartBtn = document.querySelector('#add-to-cart-btn');
const productFeature = document.querySelector('.product-feature');
let numberBoxValue;
  let incrementBtn = document.getElementById('increase-btn');
  let decrementBtn = document.getElementById('decrease-btn');
let cartItemID = 1;
let cartList = document.querySelector('.cart-items-flex-group');
const cartItemCount = document.querySelector('#cart-notification');
const cartTotalPrice = document.querySelector('#cart-total-price');
const removeAllBtn = document.querySelector('#remove-all-items');
const shoppingCart = document.querySelector('#cart-modal');
const shoppingCartIcon = document.querySelector('#shopping-cart-link');
const hamburgerBtn = document.querySelector('#mobile-menu-btn');

 async function getDataAsync(productIndex) {
  let response = await fetch(`./data.json`);
  let data = await response.json();
  let stringifiedData = JSON.stringify(data); 
  if (localStorage.getItem("productData") === null) {
 localStorage.setItem("productData", stringifiedData)
 let parsedData = JSON.parse(localStorage.getItem("productData"))
   
} else {
 let parsedData = JSON.parse(localStorage.getItem("productData"))

 inTheBox(parsedData[productIndex]);
productFeatureData(parsedData[productIndex]);
alternateImagesData(parsedData[productIndex]);
/* otherProducts(parsedData[productIndex]); */
} 


   function productFeatureData(arrEntry) {
    productFeature.innerHTML = `<img class="product-feature-img" src="${arrEntry.image.mobile}" alt="xx99-mark-two heaphones" srcset="${arrEntry.image.mobile} 654w, ${arrEntry.image.tablet} 562w, ${arrEntry.image.desktop} 1080w">
        
        
      <div id="xx99-mark-two-heading-text-and-btn" class="product-heading-text-and-btn">
        <h3 id="new-product-heading">New product</h3>
        <h1 class="product-feature-heading" id="xx-99-mark-two-heading">${arrEntry.name}</h1>
        <p id="yx1-text" class="product-text">${arrEntry.description}
        </p>
        <h3 class="product-price">$${arrEntry.price}</h3>
        <div id="counter-and-add-to-cart-container">
        <form action="" class="counter-btn-container">
          <button id="decrease-btn" class="in-and-de-btn" type="button" data-decrease>-</button>
          <input id='number-box' data-value type="text" value="1" />
          <button id="increase-btn" class="in-and-de-btn" type="button" data-increase>+</button>
        </form>
        <button type="button" id="add-to-cart-btn" class="add-to-cart-btn">Add To Cart</button>
      </div>
      </div>`
    }

  function alternateImagesData(arrEntry) {
    let alternateImages = document.querySelector('.alternate-images');
    
    if(typeof(alternateImages) != 'undefined' && alternateImages != null) {

      alternateImages.innerHTML = `<img id="alternate-img-1" src="${arrEntry.gallery.first.mobile}" alt="gallery-1" srcset="${arrEntry.gallery.first.mobile} 654w,${arrEntry.gallery.first.tablet} 554w, ${arrEntry.gallery.first.desktop} 445w">
      <img id="alternate-img-2" src="${arrEntry.gallery.second.mobile}" alt="alternate-img-2" srcset${arrEntry.gallery.second.mobile} 654w, ${arrEntry.gallery.second.tablet} 554w, ${arrEntry.gallery.second.desktop} 445w">
      <img id="alternate-img-3" src="${arrEntry.gallery.third.mobile}" alt="alternate-img-3" srcset="${arrEntry.gallery.third.mobile} 654w, ${arrEntry.gallery.third.tablet} 790w, ${arrEntry.gallery.third.desktop} 635w">`
    } else {
      return
    }
  }

function inTheBox(arrEntry) {
  let inBoxAndCountGroup = document.querySelector('#in-the-box-and-count-group');
  
  if(typeof(inBoxAndCountGroup) != 'undefined' && inBoxAndCountGroup != null) {
    for(i=0; i < arrEntry.includes; i++) {

    
    inBoxAndCountGroup.innerHTML = `<section class="in-box-item-and-count">
  <p class="in-the-box-item-count">${arrEntry.includes[i].quantity}x</p> <p class="in-the-box-item">${arrEntry.includes[i].quantity}</p>
</section>
</section>`
    }
{/* <section class="in-box-item-and-count">
  <p class="in-the-box-item-count">${arrEntry.includes[1].quantity}x</p> <p class="in-the-box-item">${arrEntry.includes[1].quantity}</p>
</section>
<section class="in-box-item-and-count">
  <p class="in-the-box-item-count">${arrEntry.includes[2].quantity}x</p> <p class="in-the-box-item">${arrEntry.includes[2].quantity}</p>
</section>
<section class="in-box-item-and-count">
  <p class="in-the-box-item-count">${arrEntry.includes[3].quantity}x</p> <p class="in-the-box-item">
  ${arrEntry.includes[3].quantity}
  </p>
</section>
 <section class="in-box-item-and-count">
  <p class="in-the-box-item-count">${arrEntry.includes[4].quantity}x</p> <p class="in-the-box-item">
  ${arrEntry.includes[4].quantity}
  </p>  */}

  } else {
    return
  }
}


function otherProducts(arrEntry) {
  let otherProducts = document.querySelector('#you-may-also-like');

  otherProducts.innerHTML = `<h2 id="you-may-also-like-heading" class="heading-2">You may also like</h2>
  <section class="you-may-also-like-flexbox">
    
    <section class="you-may-also-like-flex-group">
      <img class="you-may-also-like-img" src="${arrEntry.others[0].image.mobile}" alt="" srcset="${arrEntry.others[0].image.mobile} 320w, ${arrEntry.others[0].image.tablet} 724w, ${arrEntry.others[0].image.desktop} 1380w">
      <h3 class="you-may-also-like-heading">${arrEntry.others[0].name}</h3>
      <a href="product-xx99-mark-one-headphones.html" id="see-product-xx99-btn" class="see-product-btn">See product</a>
    </section>
 
 
    <section class="you-may-also-like-flex-group">
      <img class="you-may-also-like-img" src="${arrEntry.others[1].image.mobile}" alt="" srcset="${arrEntry.others[1].image.mobile} 320w, ${arrEntry.others[1].image.tablet} 724w, ${arrEntry.others[1].image.desktop} 1380w">
      <h3 class="you-may-also-like-heading">${arrEntry.others[1].name}</h3>
      <a href="product-xx59-headphones.html" id="see-product-xx59-btn" class="see-product-btn">See product</a>
    </section>
 
    
    <section class="you-may-also-like-flex-group">
      <img class="you-may-also-like-img" src="${arrEntry.others[2].image.mobile}" alt="" srcset="${arrEntry.others[2].image.mobile} 320w, ${arrEntry.others[2].image.tablet} 724w, ${arrEntry.others[2].image.desktop} 1380w" sizes="(max-width: 724px) 320px,
      (max-width: 1300px) 724px,
      1380px">
      <h3 class="you-may-also-like-heading">${arrEntry.others[2].name}</h3>
      <a href="product-zx9-speaker.html" id="see-product-zx9-btn" class="see-product-btn">See product</a>
        </section>
    </section>`
}





}


function getProductInfo(product) {
  let ProductInfo = {
    id: cartItemID,
    imgSrc: product.querySelector('.product-feature-img').getAttribute('src'),
    productName: product.querySelector('#xx-99-mark-two-heading').textContent,
    productPrice: product.querySelector('.product-price').textContent.replace(/\D/g,''), 
    productQuantity: product.querySelector('#number-box').value 
  }
   ProductInfo["trueProductPrice"] = ProductInfo.productPrice * ProductInfo.productQuantity; 

  cartItemID++;
  /* productTotalPrice(ProductInfo) */
  addToCartList(ProductInfo);
  /* addToSummaryPanel(ProductInfo);
  addToSummaryPanelPrices(ProductInfo); */
  saveProductToStorage(ProductInfo);
    
  }


  function productTotalPrice(product) {
    
    for(i=0; i < product.length; i++) {
      product["trueProductPrice"] = product.productPrice * product.productQuantity;

    }
  }
 

  /* const openMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let form = document.querySelector('#checkout-form');
    mobileMenu.style.display = 'block';
    if(form === null) {
      return
    } else {
      form.classList.add('greyed-out');

    }
}

const closeMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let form = document.querySelector('#checkout-form');
    mobileMenu.style.display = 'none';
    if (form === null) {
      return
    } else {
      form.classList.remove('greyed-out');
    }
}

hamburgerBtn.addEventListener('click', function() {
    let mobileMenu = document.querySelector('#mobile-menu');
    if(mobileMenu.style.display === 'none') {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}) */


/* function openShoppingCart(e) {
  e.preventDefault();
    let navBar = document.querySelector('#top-nav-bar');
    let heroSection = document.querySelector('#hero-section');
    let highlightSection = document.querySelector('#highlight-product-section');
    let zxNineFeature = document.querySelector('#zx9-feature-bg');
    let footer = document.querySelector('footer');
  if(shoppingCart.classList.contains('closed-cart')) {
  shoppingCart.classList.replace('closed-cart', 'open-cart');
      navBar.classList.add('greyed-out');
      heroSection.classList.add('greyed-out');
      highlightSection.classList.add('greyed-out');
      zxNineFeature.classList.add('greyed-out');
      footer.classList.add('greyed-out');
     
  } else if(shoppingCart.classList.contains('open-cart')) {
      shoppingCart.classList.replace('open-cart', 'closed-cart');
      navBar.classList.remove('greyed-out');
       heroSection.classList.remove('greyed-out');
      highlightSection.classList.remove('greyed-out');
      zxNineFeature.classList.remove('greyed-out'); 
      footer.classList.remove('greyed-out');
            
  }

} */




 
  
  /* getDataAsync(3); */
  loadCart();
   

   function updateCartInfo(){
    let cartInfo = findCartInfo();
    /* productTotalPrice(cartInfo) */
    if(cartInfo.productCount === '' || cartInfo.productCount === null) {
      return
    } else {
    getCartInputsTotal();
    cartTotalPrice.textContent = cartInfo.total 
     }
     
}






 function addToCartList(product) {
  const cartItem = document.createElement('span'); 
  cartItem.setAttribute('data-id', `${product.id}`);
  cartItem.classList.add('cart-item-flex');
  
  
  
  cartItem.innerHTML = `<section class="cart-item-flex"><img class="cart-item-img" src="${product.imgSrc}" alt="product cart image" srcset="">
  <section class="cart-item-name-and-price">
    <h3 class="cart-item-name">${product.productName}</h3>
    <p class="cart-item-price">$${product.productPrice}</p>
  </section>
  <form type="post" class=" cart-counter-btn-container">
    <button type="button" id="cart-decrease-btn" class="cart-decrease-btn cart-in-and-de-btn" data-decrease>-</button>
    <input id='cart-number-input' class='cart-number-box' data-value type="text" value="${product.productQuantity}"/>
    <button type="button" id="cart-increase-btn" class="cart-increase-btn cart-in-and-de-btn" data-increase>+</button>
  </form>
  </section>`;
  cartList.appendChild(cartItem);
 
}
 




 function purchaseProduct(){
  getProductInfo(productFeature);

  alert('Your item has been added to shopping cart');
  
}


 function saveProductToStorage(item) {
let products = getProductsFromStorage();
products.push(item);
localStorage.setItem('products', JSON.stringify(products));
updateCartInfo();
}


 function getProductsFromStorage(){
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

}

function deleteProduct(e){
  let cartItems = document.querySelectorAll('.cart-item-flex');
  if(e.target.id === "remove-all-items"){
    for(i=0; i < cartItems.length; i++) {
      cartItems[i].remove();
    }
    cartItemID = 1;
      localStorage.removeItem('products') // this removes from the DOM only
  } /* else if(e.target.tagName === "I"){
      cartItem = e.target.parentElement.parentElement;
      cartItem.remove(); // this removes from the DOM only
  } */

  let products = getProductsFromStorage();
  let updatedProducts = products.filter(product => {
      return product.id !== parseInt(cartItem.dataset.id);
  });
  localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
  updateCartInfo(); 
}




 function loadCart(){
  let products = getProductsFromStorage();
  console.log(products)
  if(products.length < 1){
      cartItemID = 1;
      return
  } else {
      cartItemID = products[products.length - 1].id;
      cartItemID++;
      
  }
  products.forEach(product => addToCartList(product));

  // calculate and update UI of cart info 
  updateCartInfo();
}



 function findCartInfo() {
  let products = getProductsFromStorage();
  
  const total = products.map(products => products.trueProductPrice).reduce((prev, curr) => prev + curr, 0);
  


    return{
       total: total,
      productCount: products.length 
    }
}

/* check cart count when product is added to cart */

/* document.addEventListener('DOMContentLoaded', function(){
   addToCartBtn.addEventListener('click', purchaseProduct)
}); */

document.addEventListener('click', function(e){
  if(e.target && e.target.id== 'add-to-cart-btn'){
       purchaseProduct();
  }
});


removeAllBtn.addEventListener('click', deleteProduct);



document.addEventListener('click', function(e) {
  if(e.target.classList.contains('cart-decrease-btn') && e.target.nextElementSibling.value > 1) {
    console.log(e.target.nextElementSibling.value)
    e.preventDefault();
    e.target.disabled = false;
    decrementShoppingCartInfo(e);
    e.target.nextElementSibling.value - 1;
  
 /*  updateCartInfo(); */
  return
  }
   else if(e.target = decrementBtn &&  numberBoxValue === 1) {
     e.preventDefault();
    e.target.disabled = true;
    return
  }
}

) 


 
document.addEventListener('click', function(e) {
  if(e.target && e.target.id== 'increase-btn') {
    e.preventDefault();
   numberBoxValue = document.querySelector('#number-box').value;
  numberBoxValue++;
  document.querySelector('#number-box').value = numberBoxValue;
  
  }
  else if(e.target && e.target.id== 'increase-btn' && numberBoxValue > 1) {
    decrementBtn.disabled = false
  }
}
)

document.addEventListener('click', function(e) {
  let increaseBtns = [];
  increaseBtns.push(document.getElementsByClassName('cart-increase-btn'));

  
  if(e.target.classList.contains('cart-increase-btn')) {
    e.preventDefault();
    console.log(e.target.previousElementSibling.value);
    numberBoxValue = e.target.previousElementSibling;
      numberBoxValue.value++;
/*       numberBoxValue.value = numberBoxValue.value++;
 */
incrementShoppingCartInfo(e);

  }  else if(e.target && e.target.id== 'cart-increase-btn' && numberBoxValue > 1) {
    decrementBtn.disabled = false
  }
  

})

function decrementShoppingCartInfo(e) {
  let product = JSON.parse(localStorage.getItem('products'));
  let currentCartInfo = findCartInfo();
  let numberBoxValue = document.querySelector('#cart-number-input');

  let cartItemId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
  let productIds = product.map(a => a.id);
  let clickedProductId = productIds.find(element => element == cartItemId);
  let clickedProductIndex = clickedProductId - 1;
 let convertedCartTotalPrice = parseInt(cartTotalPrice.textContent);
 let convertedCartProductCount = parseInt(cartItemCount.textContent);
 /* create originalProductQuantity for product object */
 let decrementedPrice = convertedCartTotalPrice - parseInt(product[clickedProductIndex].productPrice);
 let decrementedProductCount = parseInt(product[clickedProductIndex].productQuantity) - 1;
   product[clickedProductIndex].trueProductPrice = decrementedPrice;
   product[clickedProductIndex].productQuantity = decrementedProductCount; 
Object.assign(product[clickedProductIndex], {  trueProductPrice: product[clickedProductIndex].productPrice * product[clickedProductIndex].productQuantity,   productQuantity: decrementedProductCount })
   localStorage.setItem('products', JSON.stringify(product));
   console.log(parseInt(product[clickedProductIndex].productPrice))
   console.table(product)
   cartTotalPrice.textContent = decrementedPrice; 
      
   subtractCartInputsTotal();
/* create new function to take info from local storage object product */    console.log(currentCartInfo)
console.log(decrementedProductCount)
}

function subtractCartInputsTotal() {
  const productInputBoxes = document.getElementsByClassName('cart-number-box');
 cartItemCount.textContent = parseInt(cartItemCount.textContent) - 1;
  console.log(cartItemCount.textContent)
  
 }

function incrementShoppingCartInfo (e) {
  let product = JSON.parse(localStorage.getItem('products'));
  let currentCartInfo = findCartInfo();
  let numberBoxValue = document.querySelector('#cart-number-input');

  let cartItemId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
  let productIds = product.map(a => a.id);
  let productPrices = product.map(a => a.productPrice);
  let clickedProductId = productIds.find(element => element == cartItemId);
  let clickedProductIndex = clickedProductId - 1;
  let clickedProductPrice = e.target.parentElement.parentElement.querySelector('.cart-item-price').textContent.replace(/\D/g,'');
 let convertedCartTotalPrice = parseInt(cartTotalPrice.textContent);
 let convertedCartProductCount = parseInt(cartItemCount.textContent);
 /* create originalProductQuantity for product object */
 let incrementedPrice = convertedCartTotalPrice + parseInt(product[clickedProductIndex].productPrice);
 let incrementedProductCount = parseInt(product[clickedProductIndex].productQuantity) + 1;
   product[clickedProductIndex].trueProductPrice = incrementedPrice;
   product[clickedProductIndex].productQuantity = incrementedProductCount; 
Object.assign(product[clickedProductIndex], {  trueProductPrice: product[clickedProductIndex].productPrice * product[clickedProductIndex].productQuantity,   productQuantity: incrementedProductCount })
   localStorage.setItem('products', JSON.stringify(product));
   console.log(parseInt(product[clickedProductIndex].productPrice))
   console.table(product)
   cartTotalPrice.textContent = incrementedPrice; 
      
   getCartInputsTotal();
/* create new function to take info from local storage object product */    console.log(currentCartInfo)
console.log(incrementedProductCount)
  }  
  
function loadShoppingCart() {
  const products = JSON.parse(localStorage.getItem('products'));
  const currentCartInfo = findCartInfo();
  const numberBoxValue = document.querySelector('#cart-number-input');
  let cartInfo = findCartInfo();
if(!numberBoxValue) return;
  
 getCartInputsTotal();
/*   cartTotalPrice.textContent = cartInfo.total;
 *//*   cartTotalPrice.textContent = products[clickedProductIndex].productPrice; 
 */
}
loadShoppingCart();




 function getCartInputsTotal() {
  const productInputBoxes = document.getElementsByClassName('cart-number-box');
  let total = 0;
  for(let i = 0; i < productInputBoxes.length; i++) {
    if(parseInt(productInputBoxes[i].value)) {
      total += parseInt(productInputBoxes[i].value);
      console.log(total)
      cartItemCount.textContent = total;
    }
  }
 }

 

 


document.addEventListener('click', function(e) {
  numberBoxValue = e.target.nextElementSibling;
  if(e.target.classList.contains('cart-decrease-btn') && numberBoxValue.value > 1) {
 
    e.preventDefault();
    e.target.disabled = false;
    numberBoxValue.value--;
 
  updateCartInfo();
  return
  }
   else if(e.target.classList.contains('cart-decrease-btn') && numberBoxValue === 1) {
     e.preventDefault();
    e.target.disabled = true;
    return
  }
}

) 

