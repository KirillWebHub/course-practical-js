let bg = document.getElementById('colorBackground');
let cs = document.getElementById('colorSave');

let generateButton = document.getElementById('generateColor');
let saveButton = document.getElementById('saveGenerateColor');

let currentColor;

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Устанавливаем начальный цвет
currentColor = randomColor();
bg.style.background = currentColor;

generateButton.addEventListener('click', function() {
    currentColor = randomColor();
    bg.style.background = currentColor;
});

saveButton.addEventListener('click', function() {
    let colorBlock = document.createElement('div');
    colorBlock.className = 'saved-color';
    colorBlock.style.background = currentColor;
    
    // Создаем кнопку удаления
    let removeButton = document.createElement('button');
    removeButton.className = 'remove-color';
    removeButton.textContent = '✖';
    removeButton.addEventListener('click', function() {
        cs.removeChild(colorBlock);
    });
    
    colorBlock.appendChild(removeButton);
    cs.appendChild(colorBlock);
});


