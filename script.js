// navbar 
var nav_menu = document.querySelector('nav');
document.querySelector('.hamburger').addEventListener('click', () => nav_menu.style.display = 'flex');
document.querySelector('.close').addEventListener('click', () => nav_menu.style.display = 'none');

// items count to purchase
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
const item_count = document.querySelector('.item-count');

plus.addEventListener('click', () => item_count.innerHTML++)
minus.addEventListener('click', () => item_count.innerHTML--)

//cart details 
let cart_details = document.querySelector('.cart-details');
let basket = document.querySelector('.basket');
basket.addEventListener('click', () => {
    cart_details.style.display = 'block';
})

document.querySelector('.close-cart').addEventListener('click', () => {
    cart_details.style.display = 'none';
})
// basket carted details
let cart = document.querySelector('.cart');
document.querySelector('.button').addEventListener('click', () => {
    const product = item_count.innerHTML;
    if (product > 0)
        cart.innerHTML = product;
    if (cart.innerHTML > 0)
        cart.style.display = 'block';
})


//image slider

let img_list = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];
let index = 0;
let arrows = document.querySelectorAll('.arrow')
let preview_image = document.querySelector('.preview')
arrows.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('forward')) {
            index++;
            if (index > img_list.length-1) {
                index = 0;
            }
            preview_image.src = `./images/${img_list[index]}.jpg`
        }
        else {
            index--;
            if (index < 0) {
                index = img_list.length-1;
            }
            preview_image.src = `./images/${img_list[index]}.jpg`

        }

    })
})







