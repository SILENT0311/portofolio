// navbar fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;
  
  if(window.pageYOffset > fixNav){
    header.classList.add('fixedNav');
  }else{
    header.classList.remove('fixedNav');
  }
}

// toogle
const hamburgerToogle = document.querySelector('#hamburger-toogle');
const navMenu = document.querySelector('#nav-menu');

hamburgerToogle.addEventListener('click', function(){
  hamburgerToogle.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})