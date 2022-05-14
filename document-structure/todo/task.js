const input = document.getElementById('task__input');
const tasks__div = document.getElementById('tasks__list');


function sendTask(e){
    
    if(e.keyCode== 13 && input.value != '') {
        const task = `<div class="task">
                        <div class="task__title">
                            ${input.value}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                     </div>`;
        tasks__div.insertAdjacentHTML('afterBegin',task);
        input.value = '';
        e.preventDefault();
        
        let task_remove = document.querySelector('.task__remove');
        let  your_task = document.querySelector('.task');

        task_remove.addEventListener('click', ()=>{
            your_task.remove();
        });

        return false;
    }
    
}

input.addEventListener('keypress', sendTask);
