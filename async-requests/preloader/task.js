const xhr = new XMLHttpRequest();
const items= document.getElementById('items');
const loader = document.getElementById('loader');


xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === xhr.DONE){
       let valuteList = xhr.response.response.Valute;
       loader.classList.remove('loader_active');

        for (let key in valuteList) {

            items.insertAdjacentHTML('beforeEnd', 
                        `<div class="item">
                            <div class="item__code">
                                ${valuteList[key].CharCode}
                            </div>
                             <div class="item__value">
                                ${valuteList[key].Value}
                            </div>
                            <div class="item__currency">
                                ${valuteList[key].Name}
                            </div>
                        </div>`);
        }

    }  
});

xhr.responseType = 'json';

xhr.send();