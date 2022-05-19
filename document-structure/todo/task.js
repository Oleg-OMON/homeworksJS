const input = document.getElementById('task__input');
const tasksDiv = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

function sendTask(e){
        const task = `<div class="task">
                        <div class="task__title">
                            ${input.value.trim()}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                     </div>`;
        if(input.value.trim()) {
        tasksDiv.insertAdjacentHTML('afterBegin',task);
        input.value = '';
        e.preventDefault();
        
        let taskRemove = document.querySelector('.task__remove');
        let  yourTask = document.querySelector('.task');

        taskRemove.addEventListener('click', ()=>{
            yourTask.remove();
        });

        return false;
    
        }
    
    
}

tasksAdd.addEventListener('click',sendTask);
