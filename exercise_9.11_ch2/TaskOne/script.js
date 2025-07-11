let button = document.getElementById('clikButton');
let counter = document.getElementById('counter');
let count = 0;

button.addEventListener('click', function(){
    if(count >= 10){
        button.style.background = 'gray';
        button.textContent = 'Лимит достигнут'
        return;
    }

    count++;
    counter.textContent = count;

    if(count === 10){
        button.style.background = 'gray';
        button.textContent = 'Лимит достигнут';
        button.style.transform = 'none';
        return;
    }
});
