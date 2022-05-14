'use strict'
let cart = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
const product_add = document.querySelectorAll('.product__add');
const quantity = document.getElementsByClassName('product__quantity-control');

for(let i = 0; i < products.length; i++){
    let count_product = products[i].querySelector('.product__quantity-value');
    let product_inc = count_product.nextElementSibling;
    let product_dec = count_product.previousElementSibling;

    
    function increase(){
        count_product.innerText++;
    }

    function reduce(){  
        if(count_product.innerText >! 1){
            count_product.innerText--;
        }         
    }

    product_inc.addEventListener('click', increase);
    product_dec.addEventListener('click', reduce);  
    
}




for (let i = 0; i < product_add.length; i++) {
        
    function added(e){
        const product = e.target.closest('.product');
        const id = product.dataset.id;
        const img = product.querySelector('img').getAttribute('src');
        const count = +event.target.parentNode.querySelector('.product__quantity-value').innerText;
            for (let item of cart.children) {
                    if (item.dataset.id === id ) {                
                    
                        let quantityNow = item.querySelector('.cart__product-count');
                        let total = +quantityNow.innerText;
                        quantityNow.innerText = total + count;
                
                        return false;
                    }                              
        }   
        
        cart.insertAdjacentHTML('beforeend', `
                    <div class="cart__product" data-id="${id}">
                        <img class="cart__product-image" src="${img}">
                        <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>
                    </div>        
                    `);

        
        }
         
        product_add[i].addEventListener('click', added);                   
    
       
}   
 


