const categoryHamburgerBtn = document.querySelector('#mobile-menu-btn');
const categoryShoppingCart = document.querySelector('#cart-modal');
const categoryShoppingCartIcon = document.querySelector('#shopping-cart-link');

const openCategoryMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let navBar = document.querySelector('#top-nav-bar');
    let categoryTopHeadingContainer = document.querySelector('#category-top-heading-container');
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
      categoryTopHeadingContainer.classList.add('greyed-out');
      mainPageBg.classList.add('greyed-out');
      footer.classList.add('greyed-out');
}

const closeCategoryMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    let navBar = document.querySelector('#top-nav-bar');
    let categoryTopHeadingContainer = document.querySelector('#category-top-heading-container');
    let mainPageBg = document.querySelector('#main-page-bg');
    let footer = document.querySelector('footer');
    mobileMenu.style.display = 'none';
      navBar.classList.remove('greyed-out');
      categoryTopHeadingContainer.classList.remove('greyed-out');
      mainPageBg.classList.remove('greyed-out'); 
      footer.classList.remove('greyed-out');
}


categoryHamburgerBtn.addEventListener('click', function() {
  let mobileMenu = document.querySelector('#mobile-menu');
  if(mobileMenu.style.display === 'none') {
      openCategoryMobileMenu();
  } else {
      closeCategoryMobileMenu();
  }
})

function openShoppingCartOnCategoryPage(e) {
    e.preventDefault();
      let navBar = document.querySelector('#top-nav-bar');
      let categoryTopHeadingContainer = document.querySelector('#category-top-heading-container');
    let mainPageBg = document.querySelector('#main-page-bg');
    let footer = document.querySelector('footer');
    if(categoryShoppingCart.classList.contains('closed-cart')) {
    categoryShoppingCart.classList.replace('closed-cart', 'open-cart');
        navBar.classList.add('greyed-out');
        categoryTopHeadingContainer.classList.add('greyed-out');
        mainPageBg.classList.add('greyed-out');
        footer.classList.add('greyed-out');
        } else if(categoryShoppingCart.classList.contains('open-cart')) {
        categoryShoppingCart.classList.replace('open-cart', 'closed-cart');
        navBar.classList.remove('greyed-out');
        categoryTopHeadingContainer.classList.remove('greyed-out');
        mainPageBg.classList.remove('greyed-out'); 
        footer.classList.remove('greyed-out');            
    }
  
  }

  categoryShoppingCartIcon.addEventListener('click', openShoppingCartOnCategoryPage);