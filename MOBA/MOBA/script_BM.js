menu_btn.onclick = function() {
    menu_btn.classList.add('menu');
    link1.classList.add('linka');
    link2.classList.add('linka');
    link3.classList.add('linka');
    link4.classList.add('linka');
    x.classList.add('linka');

    link1.classList.remove('hidden');
    link2.classList.remove('hidden');
    link3.classList.remove('hidden');
    link4.classList.remove('hidden');
    x.classList.remove('hidden');
    
};
x.onclick = function() {
    link1.classList.remove('linka');
    link2.classList.remove('linka');
    link3.classList.remove('linka');
    link4.classList.remove('linka');
    x.classList.remove('linka');

    setTimeout(function() {
        menu_btn.classList.add('menu_after');
        link1.classList.add('hidden');
        link2.classList.add('hidden');
        link3.classList.add('hidden');
        link4.classList.add('hidden');
        x.classList.add('hidden');
    }, 1);

    setTimeout(function(){
        menu_btn.classList.remove('menu');
        menu_btn.classList.remove('menu_after');
    }, 500); 
};