// navbar 
var nav_menu = document.querySelector('nav');
document.querySelector('.hamburger').addEventListener('click', () => nav_menu.style.display = 'flex')
document.querySelector('.close').addEventListener('click', () => nav_menu.style.display = 'none')

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let item_count = document.querySelector('.item-count');

plus.addEventListener('click', () => item_count.innerHTML++)
minus.addEventListener('click', () => item_count.innerHTML--)
