const img = document.getElementById('cookie');
      count = document.getElementById('clicker__counter');
      clickSpeed = document.getElementById('speed');

let lastClick = new Date();
let second_lastclick = lastClick.getSeconds();

sizeUp = function(){      
       let newClick = new Date();
       count.textContent = Number(count.textContent) + 1;
       img.width = 250; 
       clickSpeed.textContent = 1/(newClick.getSeconds() - second_lastclick); 
};

sizeDown = function(){ 
       img.width = 200; 
};



img.onmousedown = sizeUp;
img.onmouseup = sizeDown;