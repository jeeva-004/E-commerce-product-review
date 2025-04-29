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
let arrows = document.querySelectorAll('.arrow');
let preview_image = document.querySelector('.preview');
arrows.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('forward')) {
            index++;
            if (index > img_list.length - 1) {
                index = 0;
            }
            preview_image.src = `./images/${img_list[index]}.jpg`;
        }
        else {
            index--;
            if (index < 0) {
                index = img_list.length - 1;
            }
            preview_image.src = `./images/${img_list[index]}.jpg`;

        }

    })
})

//display images

let img_1 = document.querySelector('.preview-img1');
let img_2 = document.querySelector('.preview-img2');
let img_3 = document.querySelector('.preview-img3');
let img_4 = document.querySelector('.preview-img4');

img_1.addEventListener('click', () => {
    preview_image.src = img_1.src;
    img_3.classList.remove('active')
    img_2.classList.remove('active')
    img_4.classList.remove('active')
    img_1.classList.add('active')
})
img_2.addEventListener('click', () => {
    img_3.classList.remove('active')
    img_1.classList.remove('active')
    img_4.classList.remove('active')
    img_2.classList.add('active')
    preview_image.src = img_2.src;
})
img_3.addEventListener('click', () => {
    preview_image.src = img_3.src;
    img_2.classList.remove('active')
    img_1.classList.remove('active')
    img_4.classList.remove('active')
    img_3.classList.add('active')
})
img_4.addEventListener('click', () => {
    preview_image.src = img_4.src;
    img_3.classList.remove('active')
    img_1.classList.remove('active')
    img_2.classList.remove('active')
    img_4.classList.add('active')
})







