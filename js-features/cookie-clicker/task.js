const img = document.getElementById('cookie');
      count = document.getElementById('clicker__counter');
      clickSpeed = document.getElementById('speed');

sizeUp = function(){
       let lastClick = new Date();
           newClick = lastClick.getSeconds();
       count.textContent = Number(count.textContent) + 1;
       img.width = 250;
       clickSpeed.textContent = Number(1/newClick);

     
};

sizeDown = function(){ 
       img.width = 200; 
};

img.onmousedown = sizeUp;
img.onmouseup = sizeDown;