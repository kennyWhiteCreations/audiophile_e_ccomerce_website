const homeHamburgerBtn=document.querySelector("#mobile-menu-btn"),homeShoppingCart=document.querySelector("#cart-modal"),homeShoppingCartIcon=document.querySelector("#shopping-cart-link");async function getDataAsync(){let e=await fetch("./data.json"),t=await e.json(),o=JSON.stringify(t);if(null===localStorage.getItem("productData")){localStorage.setItem("productData",o);let e=JSON.parse(localStorage.getItem("productData"));console.log(e)}else{JSON.parse(localStorage.getItem("productData"))}}const openHomeMobileMenu=()=>{let e=document.querySelector("#mobile-menu"),t=document.querySelector("#top-nav-bar"),o=document.querySelector("#hero-section"),r=document.querySelector("#highlight-product-section"),c=document.querySelector("#zx9-feature-bg"),s=document.querySelector("footer"),n=window.innerWidth;screen.width<screen.height&&n<=699?(e.style.display="flex",e.style.flexDirection="column",console.log(screen.width<screen.height),console.log(n>=700)):(screen.width,screen.height,e.style.display="flex",e.style.flexDirection="row"),t.classList.add("greyed-out"),o.classList.add("greyed-out"),r.classList.add("greyed-out"),c.classList.add("greyed-out"),s.classList.add("greyed-out")},closeHomeMobileMenu=()=>{let e=document.querySelector("#mobile-menu"),t=document.querySelector("#top-nav-bar"),o=document.querySelector("#hero-section"),r=document.querySelector("#highlight-product-section"),c=document.querySelector("#zx9-feature-bg"),s=document.querySelector("footer");e.style.display="none",t.classList.remove("greyed-out"),o.classList.remove("greyed-out"),r.classList.remove("greyed-out"),c.classList.remove("greyed-out"),s.classList.remove("greyed-out")};function openShoppingCartOnHomePage(e){e.preventDefault();let t=document.querySelector("#top-nav-bar"),o=document.querySelector("#hero-section"),r=document.querySelector("#highlight-product-section"),c=document.querySelector("#zx9-feature-bg"),s=document.querySelector("footer");homeShoppingCart.classList.contains("closed-cart")?(homeShoppingCart.classList.replace("closed-cart","open-cart"),t.classList.add("greyed-out"),o.classList.add("greyed-out"),r.classList.add("greyed-out"),c.classList.add("greyed-out"),s.classList.add("greyed-out")):homeShoppingCart.classList.contains("open-cart")&&(homeShoppingCart.classList.replace("open-cart","closed-cart"),t.classList.remove("greyed-out"),o.classList.remove("greyed-out"),r.classList.remove("greyed-out"),c.classList.remove("greyed-out"),s.classList.remove("greyed-out"))}homeHamburgerBtn.addEventListener("click",(function(){"none"===document.querySelector("#mobile-menu").style.display?openHomeMobileMenu():closeHomeMobileMenu()})),homeShoppingCartIcon.addEventListener("click",openShoppingCartOnHomePage),getDataAsync();
//# sourceMappingURL=index.8a895400.js.map