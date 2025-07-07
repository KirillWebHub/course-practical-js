let button = document.getElementById('clikButton');
let count = 0;

button.addEventListener('click', function(){
    count++;

    switch(count){
        case 1:
            button.textContent = 'Вы нажали на меня!';
            break;
        case 2:
            button.textContent = 'Вы нажали на меня снова!';
            break
        default:
            button.textContent = 'Вы нажали уже больше 2 раз. Остановись!!!!'
    }
});
