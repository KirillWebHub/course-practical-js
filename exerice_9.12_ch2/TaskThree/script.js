let div = document.getElementById('block');
let button = document.getElementById('clickButton');

div.addEventListener('click', function(){
    console.log('I div (я на уровень выше, чем уровень button)')
});

button.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('I buttton, Событие по уровню выше не сработает')
});