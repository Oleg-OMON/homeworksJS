'use strict'
let cart = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
const productAdd = document.querySelectorAll('.product__add');
const quantity = document.getElementsByClassName('product__quantity-control');

for(let i = 0; i < products.length; i++){
    let countProduct = products[i].querySelector('.product__quantity-value');
    let productInc = countProduct.nextElementSibling;
    let productDec = countProduct.previousElementSibling;

    function increase(){
        countProduct.innerText++;
    }

    function reduce(){  
        if(countProduct.innerText != 0){
            countProduct.innerText--;
        }         
    }

    productInc.addEventListener('click', increase);
    productDec.addEventListener('click', reduce);  
}

for (let i = 0; i < productAdd.length; i++) {
        
    function added(e){
        const product = e.target.closest('.product');
        const id = product.dataset.id;
        const img = product.querySelector('img').getAttribute('src');
        const count = +e.target.parentNode.querySelector('.product__quantity-value').innerText;
        const article = Array.from(cart.children).find(item=>item.dataset.id === id);
        
        if (article ) {                
            let quantityNow = article.querySelector('.cart__product-count');
            let total = +quantityNow.innerText;
            quantityNow.innerText = total + count;
    
            return false;
        }                              
          
        cart.insertAdjacentHTML('beforeend', `
                    <div class="cart__product" data-id="${id}">
                        <img class="cart__product-image" src="${img}">
                        <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>
                    </div>        
                    `);  
        }
         
        productAdd[i].addEventListener('click', added);                     
}   
 


