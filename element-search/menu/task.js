const item = document.getElementsByClassName('menu__item');
const link = document.getElementsByClassName('menu__link');
const itemActive = document.querySelector('.menu_active');
const arrItem = Array.from(item);

for (let i = 0; i < link.length; i++) {
    link[i].onclick = function() {
        if (item[i].querySelector('.menu_sub') !== null && item[i].querySelector('.menu_active') === null) {

            arrItem.forEach((element, index) => {
                if (element.querySelector('.menu_active')) {
                    arrItem[index].querySelector('.menu_sub').classList.remove('menu_active');
                }
            });

            item[i].querySelector('.menu_sub').classList.add('menu_active');
            return item[i].href = false;
        } else if (item[i].querySelector('.menu_sub') !== null && item[i].querySelector('.menu_active') !== null) {
            item[i].querySelector('.menu_sub').classList.remove('menu_active');
            return item[i].href = false;
        }
    }
}