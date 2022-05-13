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