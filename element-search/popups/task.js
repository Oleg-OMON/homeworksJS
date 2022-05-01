const modalWindow = document.getElementById('modal_main');
      modalWindow.className = 'modal modal_active' ;
      secondWindow = document.getElementById("modal_success");
      closeWindow = document.querySelectorAll("div.modal__close");
      windowСhange = document.querySelector(".show-success");


closeWindow.forEach(item =>{
    item.onclick = close;

    function close() {
        secondWindow.className = "modal";
        modalWindow.className = "modal";
      }
});   


function openSecondWindow(){
    secondWindow.className = "modal modal_active";
    modalWindow.className = "modal";
}


windowСhange.onclick = openSecondWindow;