/***************************
****************************
Menu Toogle Js
****************************
***************************/ 
const mobile_nav = document.querySelectorAll('.mobile-navbar-btn');
const nav_header = document.querySelector('.header');
for(let i = 0; i < mobile_nav.length; i++){
mobile_nav[i].addEventListener('click', function () {
  // alert('che che che');
  nav_header.classList.toggle("active");
});
}
