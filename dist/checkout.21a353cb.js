const addToCartBtn=document.querySelector("#add-to-cart-btn"),productFeature=document.querySelector(".product-feature");let numberBoxValue,incrementBtn=document.getElementById("increase-btn"),decrementBtn=document.getElementById("decrease-btn"),cartItemID=1,cartList=document.querySelector(".cart-items-flex-group");const cartItemCount=document.querySelector("#cart-notification"),cartTotalPrice=document.querySelector("#cart-total-price"),removeAllBtn=document.querySelector("#remove-all-items"),shoppingCart=document.querySelector("#cart-modal"),shoppingCartIcon=document.querySelector("#shopping-cart-link"),hamburgerBtn=document.querySelector("#mobile-menu-btn");async function getDataAsync(t){let e=await fetch("./data.json"),r=await e.json(),n=JSON.stringify(r);if(null===localStorage.getItem("productData")){localStorage.setItem("productData",n);JSON.parse(localStorage.getItem("productData"))}else{let e=JSON.parse(localStorage.getItem("productData"));!function(t){let e=document.querySelector("#in-the-box-and-count-group");if(void 0===e||null==e)return;for(i=0;i<t.includes;i++)e.innerHTML=`<section class="in-box-item-and-count">\n  <p class="in-the-box-item-count">${t.includes[i].quantity}x</p> <p class="in-the-box-item">${t.includes[i].quantity}</p>\n</section>\n</section>`}(e[t]),a=e[t],productFeature.innerHTML=`<img class="product-feature-img" src="${a.image.mobile}" alt="xx99-mark-two heaphones" srcset="${a.image.mobile} 654w, ${a.image.tablet} 562w, ${a.image.desktop} 1080w">\n        \n        \n      <div id="xx99-mark-two-heading-text-and-btn" class="product-heading-text-and-btn">\n        <h3 id="new-product-heading">New product</h3>\n        <h1 class="product-feature-heading" id="xx-99-mark-two-heading">${a.name}</h1>\n        <p id="yx1-text" class="product-text">${a.description}\n        </p>\n        <h3 class="product-price">$${a.price}</h3>\n        <div id="counter-and-add-to-cart-container">\n        <form action="" class="counter-btn-container">\n          <button id="decrease-btn" class="in-and-de-btn" type="button" data-decrease>-</button>\n          <input id='number-box' data-value type="text" value="1" />\n          <button id="increase-btn" class="in-and-de-btn" type="button" data-increase>+</button>\n        </form>\n        <button type="button" id="add-to-cart-btn" class="add-to-cart-btn">Add To Cart</button>\n      </div>\n      </div>`,function(t){let e=document.querySelector(".alternate-images");if(void 0===e||null==e)return;e.innerHTML=`<img id="alternate-img-1" src="${t.gallery.first.mobile}" alt="gallery-1" srcset="${t.gallery.first.mobile} 654w,${t.gallery.first.tablet} 554w, ${t.gallery.first.desktop} 445w">\n      <img id="alternate-img-2" src="${t.gallery.second.mobile}" alt="alternate-img-2" srcset${t.gallery.second.mobile} 654w, ${t.gallery.second.tablet} 554w, ${t.gallery.second.desktop} 445w">\n      <img id="alternate-img-3" src="${t.gallery.third.mobile}" alt="alternate-img-3" srcset="${t.gallery.third.mobile} 654w, ${t.gallery.third.tablet} 790w, ${t.gallery.third.desktop} 635w">`}(e[t])}var a}function getProductInfo(t){let e={id:cartItemID,imgSrc:t.querySelector(".product-feature-img").getAttribute("src"),productName:t.querySelector("#xx-99-mark-two-heading").textContent,productPrice:t.querySelector(".product-price").textContent.replace(/\D/g,""),productQuantity:t.querySelector("#number-box").value};e.trueProductPrice=e.productPrice*e.productQuantity,cartItemID++,addToCartList(e),saveProductToStorage(e)}function productTotalPrice(t){for(i=0;i<t.length;i++)t.trueProductPrice=t.productPrice*t.productQuantity}function updateCartInfo(){let t=findCartInfo();""!==t.productCount&&null!==t.productCount&&(getCartInputsTotal(),cartTotalPrice.textContent=t.total)}function addToCartList(t){const e=document.createElement("span");e.setAttribute("data-id",`${t.id}`),e.classList.add("cart-item-flex"),e.innerHTML=`<section class="cart-item-flex"><img class="cart-item-img" src="${t.imgSrc}" alt="product cart image" srcset="">\n  <section class="cart-item-name-and-price">\n    <h3 class="cart-item-name">${t.productName}</h3>\n    <p class="cart-item-price">$${t.productPrice}</p>\n  </section>\n  <form type="post" class=" cart-counter-btn-container">\n    <button type="button" id="cart-decrease-btn" class="cart-decrease-btn cart-in-and-de-btn" data-decrease>-</button>\n    <input id='cart-number-input' class='cart-number-box' data-value type="text" value="${t.productQuantity}"/>\n    <button type="button" id="cart-increase-btn" class="cart-increase-btn cart-in-and-de-btn" data-increase>+</button>\n  </form>\n  </section>`,cartList.appendChild(e)}function purchaseProduct(){getProductInfo(productFeature),alert("Your item has been added to shopping cart")}function saveProductToStorage(t){let e=getProductsFromStorage();e.push(t),localStorage.setItem("products",JSON.stringify(e)),updateCartInfo()}function getProductsFromStorage(){return localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]}function deleteProduct(t){let e=document.querySelectorAll(".cart-item-flex");if("remove-all-items"===t.target.id){for(i=0;i<e.length;i++)e[i].remove();cartItemID=1,localStorage.removeItem("products")}let r=getProductsFromStorage().filter((t=>t.id!==parseInt(cartItem.dataset.id)));localStorage.setItem("products",JSON.stringify(r)),updateCartInfo()}function loadCart(){let t=getProductsFromStorage();console.log(t),t.length<1?cartItemID=1:(cartItemID=t[t.length-1].id,cartItemID++,t.forEach((t=>addToCartList(t))),updateCartInfo())}function findCartInfo(){let t=getProductsFromStorage();return{total:t.map((t=>t.trueProductPrice)).reduce(((t,e)=>t+e),0),productCount:t.length}}function decrementShoppingCartInfo(t){let e=JSON.parse(localStorage.getItem("products")),r=findCartInfo(),n=(document.querySelector("#cart-number-input"),t.target.parentElement.parentElement.parentElement.getAttribute("data-id")),a=e.map((t=>t.id)).find((t=>t==n))-1,o=parseInt(cartTotalPrice.textContent),c=(parseInt(cartItemCount.textContent),o-parseInt(e[a].productPrice)),i=parseInt(e[a].productQuantity)-1;e[a].trueProductPrice=c,e[a].productQuantity=i,Object.assign(e[a],{trueProductPrice:e[a].productPrice*e[a].productQuantity,productQuantity:i}),localStorage.setItem("products",JSON.stringify(e)),console.log(parseInt(e[a].productPrice)),console.table(e),cartTotalPrice.textContent=c,subtractCartInputsTotal(),console.log(r),console.log(i)}function subtractCartInputsTotal(){document.getElementsByClassName("cart-number-box");cartItemCount.textContent=parseInt(cartItemCount.textContent)-1,console.log(cartItemCount.textContent)}function incrementShoppingCartInfo(t){let e=JSON.parse(localStorage.getItem("products")),r=findCartInfo(),n=(document.querySelector("#cart-number-input"),t.target.parentElement.parentElement.parentElement.getAttribute("data-id")),a=e.map((t=>t.id)),o=(e.map((t=>t.productPrice)),a.find((t=>t==n))-1),c=(t.target.parentElement.parentElement.querySelector(".cart-item-price").textContent.replace(/\D/g,""),parseInt(cartTotalPrice.textContent)),i=(parseInt(cartItemCount.textContent),c+parseInt(e[o].productPrice)),u=parseInt(e[o].productQuantity)+1;e[o].trueProductPrice=i,e[o].productQuantity=u,Object.assign(e[o],{trueProductPrice:e[o].productPrice*e[o].productQuantity,productQuantity:u}),localStorage.setItem("products",JSON.stringify(e)),console.log(parseInt(e[o].productPrice)),console.table(e),cartTotalPrice.textContent=i,getCartInputsTotal(),console.log(r),console.log(u)}function loadShoppingCart(){JSON.parse(localStorage.getItem("products")),findCartInfo();const t=document.querySelector("#cart-number-input");findCartInfo();t&&getCartInputsTotal()}function getCartInputsTotal(){const t=document.getElementsByClassName("cart-number-box");let e=0;for(let r=0;r<t.length;r++)parseInt(t[r].value)&&(e+=parseInt(t[r].value),console.log(e),cartItemCount.textContent=e)}loadCart(),document.addEventListener("click",(function(t){t.target&&"add-to-cart-btn"==t.target.id&&purchaseProduct()})),removeAllBtn.addEventListener("click",deleteProduct),document.addEventListener("click",(function(t){return t.target.classList.contains("cart-decrease-btn")&&t.target.nextElementSibling.value>1?(console.log(t.target.nextElementSibling.value),t.preventDefault(),t.target.disabled=!1,decrementShoppingCartInfo(t),void t.target.nextElementSibling.value):(t.target=decrementBtn&&1===numberBoxValue)?(t.preventDefault(),void(t.target.disabled=!0)):void 0})),document.addEventListener("click",(function(t){t.target&&"increase-btn"==t.target.id?(t.preventDefault(),numberBoxValue=document.querySelector("#number-box").value,numberBoxValue++,document.querySelector("#number-box").value=numberBoxValue):t.target&&"increase-btn"==t.target.id&&numberBoxValue>1&&(decrementBtn.disabled=!1)})),document.addEventListener("click",(function(t){[].push(document.getElementsByClassName("cart-increase-btn")),t.target.classList.contains("cart-increase-btn")?(t.preventDefault(),console.log(t.target.previousElementSibling.value),numberBoxValue=t.target.previousElementSibling,numberBoxValue.value++,incrementShoppingCartInfo(t)):t.target&&"cart-increase-btn"==t.target.id&&numberBoxValue>1&&(decrementBtn.disabled=!1)})),loadShoppingCart(),document.addEventListener("click",(function(t){return numberBoxValue=t.target.nextElementSibling,t.target.classList.contains("cart-decrease-btn")&&numberBoxValue.value>1?(t.preventDefault(),t.target.disabled=!1,numberBoxValue.value--,void updateCartInfo()):t.target.classList.contains("cart-decrease-btn")&&1===numberBoxValue?(t.preventDefault(),void(t.target.disabled=!0)):void 0}));
//# sourceMappingURL=checkout.21a353cb.js.map
