var nav_menu = document.querySelector('nav');
document.querySelector('.hamburger').addEventListener('click',()=>{
    nav_menu.style.display ='flex';
})
document.querySelector('.close').addEventListener('click',()=>{
    nav_menu.style.display ='none';
})