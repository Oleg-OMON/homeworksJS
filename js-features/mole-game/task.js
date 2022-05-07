(() => {
    const inputs = document.querySelectorAll('div > .hole');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", myFunction);
    }
    function zero(){
        dead.textContent = 0;
        lost.textContent = 0;
    }
    function myFunction() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");
        if (dead.textContent <= 8 & lost.textContent <= 3) {
            if (this.className == "hole hole_has-mole") {
                dead.textContent++ + 1;
            } else {
                lost.textContent++ + 1;
            }
        } else 
        if (dead.textContent >= 8) {
            alert('Вы выиграли');
            zero();
        } else if (lost.textContent >= 3){
            alert('Вы проиграли');
            zero();
        }
    }
    })();