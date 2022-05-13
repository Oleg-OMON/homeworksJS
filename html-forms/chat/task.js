const chat_widget = document.querySelector('.chat-widget');
const chat_widget__input = document.getElementById('chat-widget__input');
const chat_widget__messages = document.getElementById('chat-widget__messages');
const message__text = [
    'Привет',
    'На работу к 08:00',
    'Отлично!',
    'На улице прекрасная погода!',
    'Я спать!'
];


chat_widget.addEventListener('click', () => {
        chat_widget.classList.add('chat-widget_active');
    });

function time(){
    let today = new Date();
    hour = today.getHours().toString().length < 2 ? '0' + today.getHours() : today.getHours();
    min = today.getMinutes().toString().length < 2 ? '0' + today.getMinutes() : today.getMinutes();
    current_time = `${hour}:${min}`;

    return current_time;
}  



function sendMessageBot(){
    const rand = Math.floor(Math.random() * message__text.length);
    const robot_massages = `<div class="message">
                                        <div class="message__time">${time()}</div>
                                        <div class="message__text">${message__text[rand]}</div>
                                    </div>`;

    chat_widget__messages.innerHTML += robot_massages; 
}
function sendMessageClient(e){
        // e.preventDefault();
        if(e.keyCode== 13 && chat_widget__input.value != '') {
            const client_massages = `<div class="message message_client">
                                        <div class="message__time">${time()}</div>
                                        <div class="message__text">${chat_widget__input.value}</div>
                                    </div>`;

    chat_widget__messages.innerHTML += client_massages;
    sendMessageBot();
    }
}

chat_widget__input.addEventListener('keypress', sendMessageClient);
        

            

            
             
                 
    

