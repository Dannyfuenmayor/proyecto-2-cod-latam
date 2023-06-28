menuitems.forEach(function(item) {
    item.addEventlistener ('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
    
});