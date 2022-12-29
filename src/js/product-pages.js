const productPagesHamburgerBtn = document.querySelector('#mobile-menu-btn');
const productPagesShoppingCart = document.querySelector('#cart-modal');
const productPagesShoppingCartIcon = document.querySelector('#shopping-cart-link');


const openProductPagesMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let navBar = document.querySelector('#top-nav-bar');
    let mainPageBg = document.querySelector('#main-page-bg');
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
      mainPageBg.classList.add('greyed-out');
      footer.classList.add('greyed-out');
}

const closeProductPagesMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let navBar = document.querySelector('#top-nav-bar');
    let mainPageBg = document.querySelector('#main-page-bg');
    let footer = document.querySelector('footer');
    mobileMenu.style.display = 'none';
      navBar.classList.remove('greyed-out');
      mainPageBg.classList.remove('greyed-out'); 
      footer.classList.remove('greyed-out');
}


productPagesHamburgerBtn.addEventListener('click', function() {
  let mobileMenu = document.querySelector('#mobile-menu');
  if(mobileMenu.style.display === 'none') {
      openProductPagesMobileMenu();
  } else {
      closeProductPagesMobileMenu();
  }
})

function openShoppingCartOnproductPages(e) {
    e.preventDefault();
      let navBar = document.querySelector('#top-nav-bar');
    let mainPageBg = document.querySelector('#main-page-bg');
    let footer = document.querySelector('footer');
    if(productPagesShoppingCart.classList.contains('closed-cart')) {
    productPagesShoppingCart.classList.replace('closed-cart', 'open-cart');
        navBar.classList.add('greyed-out');
        mainPageBg.classList.add('greyed-out');
        footer.classList.add('greyed-out');
        } else if(productPagesShoppingCart.classList.contains('open-cart')) {
        productPagesShoppingCart.classList.replace('open-cart', 'closed-cart');
        navBar.classList.remove('greyed-out');
        mainPageBg.classList.remove('greyed-out'); 
        footer.classList.remove('greyed-out');            
    }
  
  }

  productPagesShoppingCartIcon.addEventListener('click', openShoppingCartOnproductPages);