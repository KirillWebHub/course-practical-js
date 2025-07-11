let block = document.getElementById('block');

let buttonShow = document.getElementById('clikButton');
let buttonSide = document.createElement('button');
buttonSide.id = 'sideButton'
buttonSide.textContent = 'Hide';

let paragraph = document.createElement('p');
paragraph.id = 'paragraph';
paragraph.textContent = 'Данный текст был скрыт!'

block.appendChild(paragraph);
block.appendChild(buttonSide);
buttonSide.style.display = 'none';
paragraph.style.display = 'none';




buttonShow.addEventListener('click', function(){
    buttonShow.style.display = 'none';
    buttonSide.style.display = 'block';
    paragraph.style.display = 'block';
});

buttonSide.addEventListener('click', function(){
    buttonSide.style.display = 'none';
    paragraph.style.display = 'none';
    buttonShow.style.display = 'block';
});