const letter = document.querySelectorAll('.font-size');
let text = document.querySelector('.book__content');



function change_letter(event){
    event.preventDefault();
    letter.forEach((item) => {
        if (item.classList.contains("font-size_active")) {
          item.classList.remove("font-size_active");
          text.classList.remove("book_fs-small");
          text.classList.remove("book_fs-big");
        };
      });

        if (this.classList.contains('font-size_small')){
            this.classList.add('font-size_active');
            text.classlist.add('book_fs-small');
        }
        else if(this.classList.contains('font-size_big')){
            this.classList.add('font-size_active');
            text.classList.add('book_fs-big');
        }
        else if(!this.classList.contains('font-size_small') && !this.classList.contains('font-size_big'));{
            this.classList.add('font-size_active');
            // text.className = "book__content";
        }
}


letter.forEach((item) => {
    item.addEventListener("click",change_letter );
  });