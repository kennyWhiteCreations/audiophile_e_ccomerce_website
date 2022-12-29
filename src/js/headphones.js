const hamburgerBtn = document.querySelector('#mobile-menu-btn');


const openMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    if(screen.width < screen.height) {
        mobileMenu.style.display = 'flex';
        mobileMenu.style.flexDirection = 'column';
      } else if(screen.width < screen.height && window.screen.width >= 700) {
        mobileMenu.style.display = 'flex';
        mobileMenu.style.flexDirection = 'row';
      }else {
        mobileMenu.style.display = 'flex';
        mobileMenu.style.flexDirection = 'row';
      }
}

const closeMobileMenu = () => {
    let mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.style.display = 'none';
}

hamburgerBtn.addEventListener('click', function() {
    let mobileMenu = document.querySelector('#mobile-menu');
    if(mobileMenu.style.display === 'none') {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
})
