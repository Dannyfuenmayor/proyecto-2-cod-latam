const menuItems = document.querySelectorAll( '.item-menu1');

menuItems.forEach(function (item) {
    item.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});