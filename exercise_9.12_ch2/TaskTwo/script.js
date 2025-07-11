let section = document.getElementById('section');
let div = document.getElementById('block');
let button = document.getElementById('clickButton');

section.addEventListener('click', function(){
    console.log('I section (Capturing)')
}, true);

div.addEventListener('click', function(){
    console.log('I div (Bubbling)')
});

div.addEventListener('click', function(){
    console.log('I div (Capturing)')
}, true);

button.addEventListener('click', function(){
    console.log('I button (Bubbling)')
});