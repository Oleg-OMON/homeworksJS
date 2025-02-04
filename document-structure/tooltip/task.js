const hasTooltip  = document.querySelectorAll('.has-tooltip');

function tooltip (tooltipText) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = tooltipText;
    return tooltip.outerHTML;
}

for (let item of hasTooltip) {
    item.insertAdjacentHTML('afterEnd', tooltip (item.title));

    item.addEventListener('click', function(e) {
        e.preventDefault();
        item.nextElementSibling.style.position = 'absolute';
        item.nextElementSibling.classList.add('tooltip_active');
        item.nextElementSibling.style.left = `${item.getBoundingClientRect().left}px`;

        if(item.nextElementSibling.classList.contains('tooltip_active')){
            item.addEventListener('click', function(e) {
                item.nextElementSibling.classList.remove('tooltip_active');
            });
        }
    });
}