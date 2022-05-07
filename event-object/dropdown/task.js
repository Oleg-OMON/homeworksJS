const dropList = document.querySelector(".dropdown__list");
    listItem = document.querySelectorAll('.dropdown__item');
    listValue = document.querySelector('.dropdown__value');
    


function openList() {
    dropList.classList.add('dropdown__list_active');
}

function titleChange(){
    
    listItem.forEach(item =>{
        item.addEventListener("click", () =>{
            listValue.textContent = item.textContent;
            });
    });
    dropList.className = 'dropdown__list';   
}





function main(){

    listValue.addEventListener("click", openList);
    titleChange();
}

main();


    


