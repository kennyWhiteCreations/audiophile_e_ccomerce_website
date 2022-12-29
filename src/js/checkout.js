const emailInput = document.querySelector('#email-address');
const mainPageBg = document.querySelector('#main-page-bg');
const payBtn = document.querySelector('#pay-btn');
const form = document.querySelector('#checkout-form');
const successModalBackHomeBtn = document.querySelector('#success-modal-home-btn');
const checkoutHamburgerBtn = document.querySelector('#mobile-menu-btn');
const checkoutShoppingCart = document.querySelector('#cart-modal');
const checkoutShoppingCartIcon = document.querySelector('#shopping-cart-link');









function addToSummaryPanel() {
   /*  const summaryPanel = document.createElement('checkout-summary'); */
    const product = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
  
    const summaryItemsGroup = document.querySelector('#summary-items-flex-group');
    /* const summaryItem = document.createElement('section'); */
    /* summaryItem.setAttribute('data-id', `${product.id}`); */
    /* summaryItem.classList.add('summary-items-flex'); */
    /* console.log(summaryItem.style.display) */

    for(let i=0; i < product.length; i++) {
    summaryItemsGroup.innerHTML += `<section class="summary-items-flex"><img
    class="summary-item-flex"
    src="${product[i].imgSrc}"
    alt="summary-img"
    srcset=""
  />
  
  <section class="summary-item-title-and-price">
    <p class="summary-product-name">${product[i].productName}</p>
    <p class="summary-product-charge-amount">${product[i].productPrice * product[i].productQuantity}</p>
  </section>
  
  <p class="summary-product-count">x${product[i].productQuantity}</p></section>`;
    }  
  }
  
  
  function addToSummaryPanelPrices() {
    const priceAndLabelGroup = document.querySelector('#price-and-label-flex');
    const summaryChargesAndPrices = document.createElement('section');
    const product = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    const total = product.map(product => product.trueProductPrice).reduce((prev, curr) => prev + curr, 0);
    summaryChargesAndPrices.classList.add('charges-and-prices');
  
    priceAndLabelGroup.innerHTML = `<section class="charges-and-prices">
    <p class="summary-charges-headings">Total</p>
    <p class="summary-charges-price" id="summary-total-price">$${total}</p>
  </section>
  <section class="charges-and-prices">
    <p class="summary-charges-headings">Shipping</p>
    <p class="summary-charges-price">$10</p>
  </section>
  <section class="charges-and-prices">
    <p class="summary-charges-headings">VAT</p>
    <p class="summary-charges-price">$120</p>
  </section>
  <section class="charges-and-prices">
    <p class="summary-charges-headings">Grand total</p>
    <p class="summary-charges-price" id="summary-grand-total">$${10 + 120 + total}</p>
  </section>`;
  
  priceAndLabelGroup.appendChild(summaryChargesAndPrices);
  }



/* function eMoneyValidation() {
  let eMoneyInput = document.querySelector('#e-money');
  let eMoneyInputNumber = document.querySelector('#e-money-number');
  let eMoneyInputPin = document.querySelector('#e-money-pin');


  if(eMoneyInput.checked) {
    if(eMoneyInputNumber.value.length < 10 || eMoneyInputPin.value.length < 4) {
          eMoneyContainer.style.borderColor = 'red';
      return false
    } else if(eMoneyInputNumber.value.length < 10 && eMoneyInputPin.value.length === 4) {

    } else {
      eMoneyContainer.style.borderColor = 'green';
      
      return true
    }
  }

} */


function hideEMoneyInputs() {
  let eMoneyInputPin = document.querySelector('#e-money-pin');
  let eMoneyInputNumber = document.querySelector('#e-money-number');
  let eMoneyInputNumberLabel = document.querySelector('[for="e-money-number"]');
  let eMoneyInputLabel = document.querySelector('[for="e-money-pin"]');
  let cashOnDeliveryInfo = document.querySelector('#cash-on-delivery-info');

    eMoneyInputPin.style.display = 'none';
    eMoneyInputNumber.style.display = 'none';
    eMoneyInputNumberLabel.style.display = 'none';
    eMoneyInputLabel.style.display = 'none';
    cashOnDeliveryInfo.style.display = 'none';
  
}

function showOrHideEMoneyInputs() {
  let eMoneyInput = document.querySelector('#e-money');
  let cashOnDeliveryInput = document.querySelector('#cash-on-delivery');
  let eMoneyInputPin = document.querySelector('#e-money-pin');
  let eMoneyInputNumber = document.querySelector('#e-money-number');
  let eMoneyInputNumberLabel = document.querySelector('[for="e-money-number"]');
  let eMoneyInputLabel = document.querySelector('[for="e-money-pin"]');
  let cashOnDeliveryInfo = document.querySelector('#cash-on-delivery-info');

  if(eMoneyInput.checked) {

    eMoneyInputPin.style.display = 'block';
    eMoneyInputNumber.style.display = 'block';
    eMoneyInputNumberLabel.style.display = 'block';
    eMoneyInputLabel.style.display = 'block';
    cashOnDeliveryInfo.style.display = 'none';
  } else if(cashOnDeliveryInput.checked) {
    eMoneyInputPin.style.display = 'none';
    eMoneyInputNumber.style.display = 'none';
    eMoneyInputNumberLabel.style.display = 'none';
    eMoneyInputLabel.style.display = 'none';
    cashOnDeliveryInfo.style.display = 'block';
  }

  
}

showOrHideEMoneyInputs();


function eMoneyInputNumberValidation() {
  let eMoneyInput = document.querySelector('#e-money');
  let eMoneyInputNumber = document.querySelector('#e-money-number');
  

  if(eMoneyInput.checked) {
    
    if(eMoneyInputNumber.value.length != 10) {
      eMoneyInputNumber.style.borderColor = 'red';
      return false;
    } else {
      eMoneyInputNumber.style.borderColor = 'green';
      return true;
    }
}
}


/* figure out whether or not to clear eMoney inputs on cash on delivery selection */

function eMoneyInputPinValidation() {
  let eMoneyInput = document.querySelector('#e-money');
  let eMoneyInputPin = document.querySelector('#e-money-pin');

  if(eMoneyInput.checked) {
    if(eMoneyInputPin.value.length < 4) {
      eMoneyInputPin.style.borderColor = 'red';
      return false;
    } else {
      eMoneyInputPin.style.borderColor = 'green';
      return true;
    }
}
}





/* modal code */

/* 


*modal/summary needs*
input data from product object into success modal
summary items need to be synced with the cart



*/

function validateEmptyInputs(input) {
  if(input.value === '' || input.value === null) {
    input.style.borderColor = 'red';
    return false
  } else {
    input.style.borderColor = 'green';
    return true
  }
}


function validateAllInputs() {

}



 function formSubmitValidation() {
  let nameInput = document.querySelector('#name');
  let addressInput = document.querySelector('#address');
  let cityInput = document.querySelector('#city');
  let countryInput = document.querySelector('#country');
  let eMoneyNumberInput = document.querySelector('#e-money');
  let cashOndeliveryInput = document.querySelector('#cash-on-delivery');

console.log(eMoneyNumberInput.checked)
    if(eMoneyNumberInput.checked && validateEmail() && validatePhoneNum() && validateEmptyInputs(nameInput) && validateEmptyInputs(addressInput) && validateEmptyInputs(cityInput) && validateEmptyInputs(countryInput) && zipCodeValidation() && eMoneyInputNumberValidation() && eMoneyInputPinValidation() === true)
      {
      return true
    } else if(cashOndeliveryInput.checked && validateEmail() && validatePhoneNum() && validateEmptyInputs(nameInput) && validateEmptyInputs(addressInput) && validateEmptyInputs(cityInput) && validateEmptyInputs(countryInput) && zipCodeValidation() === true ) {
      return true
    } else {
    return false
  }  
} 


function zipCodeValidation() {
  let zipCodeInput = document.querySelector('#zip-code');
    if(zipCodeInput.value.length != 5) {
      zipCodeInput.style.borderColor = 'red';
      zipCodeInput.value = zipCodeInput.value.slice(0, zipCodeInput.maxLength);
      return false;
    } else {
      zipCodeInput.style.borderColor = 'green';
      return true;
    }

}



/* form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nameInput = document.querySelector('#name');
  let addressInput = document.querySelector('#address');
  let cityInput = document.querySelector('#city');
  let countryInput = document.querySelector('#country');
  let zipCodeInput = document.querySelector('#zip-code');
  let eMoneyInput = document.querySelector('#e-money');
  let eMoneyPinInput = document.querySelector('#e-money-pin');
  console.log('jgjgj')
}) */

function numberInputValidation(input, maxLength) {
  if (input.value < maxLength || input.value === '' || input.value === null) {
    input.style.borderColor = 'red';
  return false
  } else {
    input.style.borderColor = 'green';
    return true
  }
}






function validateEmail() {
   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const emailValidationTest = emailRegex.test(emailInput.value);
   const emailWarningMsg = document.querySelector('#email-warning-msg');
   if (emailValidationTest === true) {
      emailInput.style.borderColor = 'green';
      emailWarningMsg.style.display = 'none';
      return true
   } else {
    
      emailInput.style.borderColor = 'red';
      emailWarningMsg.style.display = 'block';
      return false
   }
 
}


 function validatePhoneNum() {
  const phoneNumInput = document.querySelector('#phone-number');
  const phoneNumRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const phoneNumValidationTest = phoneNumRegex.test(phoneNumInput.value);
  if (phoneNumValidationTest === true) {
    phoneNumInput.style.borderColor = 'green';
     return true
  } else {
     
     phoneNumInput.style.borderColor = 'red';
     return false
  }

}

function AddToSuccessModal() {
  const products = getProductsFromStorage();
  const total = products.map(products => products.trueProductPrice).reduce((prev, curr) => prev + curr, 0);
  const FirstProductCard = document.querySelector('#success-modal-first-item-group');
  const grandTotalContainer = document.querySelector('#grand-total-container');
  FirstProductCard.innerHTML = `<section id="success-modal-first-item">
  <img
    id="success-item-img"
    src="${products[0].imgSrc}"
    alt="success-product-image"
  />
  <section id="success-item-title-and-price">
    <h3 class="success-product-name">${products[0].productName}</h3>
    <p id="succces-modal-item-price">$${products[0].productPrice}</p>
  </section>
  <p id="success-item-notification">x ${products[0].productQuantity}</p>
</section>
<p id="success-other-items">
  and <span id="success-other-items-amount">${products.length - 1}</span> other item(s)
</p>
</section>`;
grandTotalContainer.innerHTML = `<p id="success-grand-total">Grand total</p>
<p id="succces-modal-price">$${total}</p>`;
  
}

const openCheckoutMobileMenu = () => {
  let mobileMenu = document.querySelector('#mobile-menu');
  let navBar = document.querySelector('#top-nav-bar');
  let bodyWrapper = document.querySelector('#body-wrapper');
  let innerWidth = window.innerWidth;
    if(screen.width < screen.height && innerWidth <= 699) {
      mobileMenu.style.display = 'flex';
      mobileMenu.style.flexDirection = 'column';
      console.log(screen.width < screen.height)
      console.log(innerWidth >= 700)
    }  else if(screen.width < screen.height && innerWidth >= 700) {
      mobileMenu.style.display = 'flex';
      mobileMenu.style.flexDirection = 'row';
    } else {
      mobileMenu.style.display = 'flex';
      mobileMenu.style.flexDirection = 'row';
    }
    navBar.classList.add('greyed-out');
    bodyWrapper.classList.add('greyed-out');
    
}

const closeCheckoutMobileMenu = () => {
  let mobileMenu = document.querySelector('#mobile-menu');
  let navBar = document.querySelector('#top-nav-bar');
  let bodyWrapper = document.querySelector('#body-wrapper'); 
  mobileMenu.style.display = 'none';
    navBar.classList.remove('greyed-out');
     bodyWrapper.classList.remove('greyed-out');
}


checkoutHamburgerBtn.addEventListener('click', function() {
  let mobileMenu = document.querySelector('#mobile-menu');
  if(mobileMenu.style.display === 'none') {
      openCheckoutMobileMenu();
  } else {
      closeCheckoutMobileMenu();
  }
})


function openShoppingCartOnCheckoutPage(e) {
  e.preventDefault();
    let navBar = document.querySelector('#top-nav-bar');
    let bodyWrapper = document.querySelector('#body-wrapper');
  if(checkoutShoppingCart.classList.contains('closed-cart')) {
  checkoutShoppingCart.classList.replace('closed-cart', 'open-cart');
      navBar.classList.add('greyed-out');
      bodyWrapper.classList.add('greyed-out');
      } else if(checkoutShoppingCart.classList.contains('open-cart')) {
      checkoutShoppingCart.classList.replace('open-cart', 'closed-cart');
      navBar.classList.remove('greyed-out');
      bodyWrapper.classList.remove('greyed-out');            
  }

}



function openSuccessModal() {
   const successModal = document.querySelector('#success-modal');
   let form = document.querySelector('#checkout-form');
   successModal.classList.replace('closed-modal', 'open-modal');
   form.classList.add('greyed-out');
   AddToSuccessModal();
}

function deleteProductAfterPurchase(){
  let cartItems = document.querySelectorAll('.cart-item-flex');
  if(successModalBackHomeBtn){
    for(i=0; i < cartItems.length; i++) {
      cartItems[i].remove();
    }
      localStorage.removeItem('products') // this removes from the DOM only
  } /* else if(e.target.tagName === "I"){
      cartItem = e.target.parentElement.parentElement;
      cartItem.remove(); // this removes from the DOM only
  } */

  let products = getProductsFromStorage();
  let updatedProducts = products.filter(product => {
      return product.id !== parseInt(cartItems.dataset.id);
  });
  localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
  updateCartInfo(); 
}

function findCartInfo() {
  let products = getProductsFromStorage();
  /* productTotalPrice(products); */
  console.table(products)
 /*  let total = products.reduce((accumulator, products) => {
  return accumulator += products.trueProductPrice;
}, 0);
  console.log(total) */
 
  const total = products.map(products => products.trueProductPrice).reduce((prev, curr) => prev + curr, 0);


    return{
       total: total,
      productCount: products.length 
    }
}


function updateCartInfo(){
  let cartInfo = findCartInfo();
  /* productTotalPrice(cartInfo) */
  if(cartInfo.productCount === '' || cartInfo.productCount === null) {
    return
  } else {
  cartItemCount.textContent = cartInfo.productCount;
 cartTotalPrice.textContent = cartInfo.total 
  }
}


function loadCart(){
  let products = getProductsFromStorage();
  
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



successModalBackHomeBtn.addEventListener('click', (e)=> {
  // Get url from the target element (<a>) href attribute
  let url = e.target.href;
  
  e.preventDefault();
  deleteProductAfterPurchase()
  // Open the url in the current window. Set to "_blank" instead of "_self" to open in a new window.
  loadCart()
  window.open(url, '_self');
} )


 form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.assert(formSubmitValidation())
  if(formSubmitValidation() === false) {
    return 
  } else {
    openSuccessModal();
    return true
  }
}); 



  
checkoutShoppingCartIcon.addEventListener('click', openShoppingCartOnCheckoutPage);
addToSummaryPanel();
addToSummaryPanelPrices();