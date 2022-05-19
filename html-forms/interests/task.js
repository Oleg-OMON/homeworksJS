<<<<<<< HEAD
const li = document.getElementsByClassName('interests');



console.log(li.parentElement);
=======
const checkbox = document.querySelectorAll('.interest');




for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function() {
        let parentLi = event.currentTarget;
        let parentCheckbox = parentLi.querySelector('.interest__check');
        let childCheckboxes = parentLi.querySelectorAll('.interest__check');

        if (event.target === parentCheckbox) {
            for (let j = 0; j < childCheckboxes.length; j++) {
            childCheckboxes[j].checked = parentCheckbox.checked;                
        }
    }
    });    
}
>>>>>>> d65e35532113057c7389ff9e2c3aa49a0dfc5de0
