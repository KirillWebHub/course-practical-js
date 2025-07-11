let button = document.getElementById('clikButton');
let message = document.getElementById('message');

disabled = true;

setTimeout(function(){
    message.classList.add('success');
    message.textContent = 'Кнопка активна'
    disabled = false;
}, 5000);


button.addEventListener('click', function(){
    if(disabled){
        message.classList.add('error');
        message.textContent = 'Дождитесь когда кнопка сможет быть активной'
    } else {
        alert('Кнопка была нажата')
    }
})
