//Задача 1

// let element = document.getElementById('content');
// element.textContent = 'Привет, программист!';

//Задача 2

// let link = document.getElementById('link');
// link.setAttribute('href', 'https://www.example.com');

// Задча 3

// let box = document.getElementById('box');

// box.style.color = 'blue'
// box.style.fontSize = '24px'

// Задча 4

// let element2 = document.getElementById('randomColor');

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
    
//     return `rgb(${red}, ${green}, ${blue})`;
// }

// function changeColor(){
//     let randomColor = getRandomColor();
//     element2.style.background = randomColor;
// }

// changeColor();

// setInterval(changeColor, 1000);

// Задча 5

let action = document.getElementById('removeDelete');

function addLi() {
    let createLi = document.createElement('li'); 
    createLi.textContent = 'Новый элемент'; 
    action.appendChild(createLi);
    return createLi; 
}

function removeLi() {
    if (action.children.length > 0) { 
        let lastChild = action.lastElementChild; 
        action.removeChild(lastChild); 
    }
}

// Добавляем новый элемент каждые 2 секунды
setInterval(addLi, 2000);

// И удаляем последний элемент каждые 2 секунды (через 1 секунду после добавления)
setTimeout(() => setInterval(removeLi, 2000), 1000);