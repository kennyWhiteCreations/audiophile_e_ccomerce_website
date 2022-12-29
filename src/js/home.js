const homeHamburgerBtn = document.querySelector('#mobile-menu-btn');
const homeShoppingCart = document.querySelector('#cart-modal');
const homeShoppingCartIcon = document.querySelector('#shopping-cart-link');

async function getDataAsync() {
    let response = await fetch(`./data.json`);
    let data = await response.json();
      let stringifiedData = JSON.stringify(data); 
       if (localStorage.getItem("productData") === null) {
      localStorage.setItem("productData", stringifiedData)
      let parsedData = JSON.parse(localStorage.getItem("productData"))
      console.log(parsedData);   
    } else {
      let parsedData = JSON.parse(localStorage.getItem("productData"))
      return
    } 
  }


  const openHomeMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let navBar = document.querySelector('#top-nav-bar');
    let heroSection = document.querySelector('#hero-section');
    let highlightSection = document.querySelector('#highlight-product-section');
    let zxNineFeature = document.querySelector('#zx9-feature-bg');
    let footer = document.querySelector('footer');
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
      heroSection.classList.add('greyed-out');
      highlightSection.classList.add('greyed-out');
      zxNineFeature.classList.add('greyed-out');
      footer.classList.add('greyed-out');
}

const closeHomeMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let navBar = document.querySelector('#top-nav-bar');
    let heroSection = document.querySelector('#hero-section');
    let highlightSection = document.querySelector('#highlight-product-section');
    let zxNineFeature = document.querySelector('#zx9-feature-bg');
    let footer = document.querySelector('footer'); 
    mobileMenu.style.display = 'none';
      navBar.classList.remove('greyed-out');
       heroSection.classList.remove('greyed-out');
      highlightSection.classList.remove('greyed-out');
      zxNineFeature.classList.remove('greyed-out'); 
      footer.classList.remove('greyed-out');
}


homeHamburgerBtn.addEventListener('click', function() {
  let mobileMenu = document.querySelector('#mobile-menu');
  if(mobileMenu.style.display === 'none') {
      openHomeMobileMenu();
  } else {
      closeHomeMobileMenu();
  }
})

function openShoppingCartOnHomePage(e) {
  e.preventDefault();
    let navBar = document.querySelector('#top-nav-bar');
    let heroSection = document.querySelector('#hero-section');
    let highlightSection = document.querySelector('#highlight-product-section');
    let zxNineFeature = document.querySelector('#zx9-feature-bg');
    let footer = document.querySelector('footer');
  if(homeShoppingCart.classList.contains('closed-cart')) {
  homeShoppingCart.classList.replace('closed-cart', 'open-cart');
      navBar.classList.add('greyed-out');
      heroSection.classList.add('greyed-out');
      highlightSection.classList.add('greyed-out');
      zxNineFeature.classList.add('greyed-out');
      footer.classList.add('greyed-out');
  
  /* cartIncreaseBtn(); */
 /*  mainPageBg.style.opacity = '0.4'; */        
  } else if(homeShoppingCart.classList.contains('open-cart')) {
      homeShoppingCart.classList.replace('open-cart', 'closed-cart');
      navBar.classList.remove('greyed-out');
       heroSection.classList.remove('greyed-out');
      highlightSection.classList.remove('greyed-out');
      zxNineFeature.classList.remove('greyed-out'); 
      footer.classList.remove('greyed-out');
      /* mainPageBg.style.opacity = '1'; */
            
  }

}


homeShoppingCartIcon.addEventListener('click', openShoppingCartOnHomePage);

  getDataAsync();