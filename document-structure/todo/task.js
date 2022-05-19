const input = document.getElementById('task__input');
const tasks__div = document.getElementById('tasks__list');
const tasks__add = document.getElementById('tasks__add');

function sendTask(e){
    
    tasks__add.addEventListener('click', () =>{
        const task = `<div class="task">
                        <div class="task__title">
                            ${input.value.trim()}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                     </div>`;
        if(input.value.length !== 0) {
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
    });
    
}

input.addEventListener('keypress', sendTask);
