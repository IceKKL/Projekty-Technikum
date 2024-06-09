
var x = prompt("Podaj Liczbę");

if(x>10) {
    wrapper.classList.add('big');
} else {
    wrapper.classList.add('small')
};

wrapper.onmouseover = function(){
    wrapper.classList.remove('small');
    wrapper.classList.remove('big');
}
