

const second = document.getElementById('timer');



setInterval(()=>{
    second.textContent = Number(second.textContent) - 1;
    if (second.textContent <= 0) {
        alert('Вы выиграли');
    }
}, 1000);


   



