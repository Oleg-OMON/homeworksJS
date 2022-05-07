

const second = document.getElementById('timer');

function counter(){
    second.textContent = Number(second.textContent) - 1;
    if (second.textContent == 0) {
        alert('Вы выиграли');
        clearInterval(timer);
    } 
    
}

let timer = setInterval(counter, 1000); 




  



