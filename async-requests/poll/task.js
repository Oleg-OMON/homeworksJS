const poll__title = document.getElementById('poll__title');
const poll__answers = document.getElementById('poll__answers');
let btn = document.getElementsByTagName('button');

function question(){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === xhr.DONE){
            let question_title = xhr.response.data.title;
            let answers_list = xhr.response.data.answers;
            
            poll__title.insertAdjacentHTML('afterBegin', question_title);

            for(i = 0; i < answers_list.length; i++){
                poll__answers.innerHTML += `<button class="poll__answer">
                                                ${answers_list[i]}
                                            </button>`;
                             
            }
            for(i = 0; i < poll__answers.length; i++){

               btn.addEventListener('click', () =>{
                alert('Спасибо, ваш голос засчитан!');
            }); 
            }
            

        }
    });

    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

    xhr.responseType = 'json';

    xhr.send();
}

question();