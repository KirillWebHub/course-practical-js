//Task #1
let num = Number(prompt("Введите число от 0 до 24"));

if (num >= 6 && num <= 11){
	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Время суток: Утро</p>`
} else if (num >= 12 && num <= 17){
	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Время суток: День</p>`
} else if (num >= 18 && num <= 23){
	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Время суток: Вечер</p>`
} else if (num >= 0 && num <= 5){
	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Время суток: Ночь</p>`
} else {
	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Неккоректно введенны данные!</p>`
}

//Task #2 
let ch = Number(prompt("Введите число: "));

if (ch % 2 == 0){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №2</h3>
	<p>Ваше число четное!</p>` 
} else {
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №2</h3>
	<p>Ваше число нечетное!</p>` 
}

//Task #3

let res = Number(prompt('Введите результат оценки экзамена: '));

if (res >= 90 && res <= 100){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №3</h3>
	<p>Экзамен сдан на Отлично!</p>` 
} else if (res >= 75 && res <= 89) {
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №3</h3>
	<p>Экзамен сдан на Хорошо!</p>`
} else if (res >= 60 && res <= 74){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №3</h3>
	<p>Экзамен сдан на Удовлетворительно!</p>`
} else if (res <= 60){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №3</h3>
	<p>Экзамен сдан на Неудовлетворительно!</p>`
} else {
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №3</h3>
	<p>Неккоректно введены данные!</p>`
}

//Task #4 
let age = Number(prompt('Введите ваш возраст:'));

if (age < 12 ){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №4</h3>
	<p>Вы ребенок!</p>`
} else if (age >= 12 && age <= 17){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №4</h3>
	<p>Вы Подросток!</p>`
} else if (age >= 18 && age <= 59){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №4</h3>
	<p>Вы Взрослый!</p>`
} else {
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №4</h3>
	<p>Вы Пенсионер!</p>`
} 

//Task #5
let month = Number(prompt('Введите номер месяца: '));

if (month <= 3){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №5</h3>
	<p>${month} месяц относиться к 1 кварталу</p>`
} else if (month <= 6){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №5</h3>
	<p>${month} месяц относиться к 2 кварталу</p>`
} else if (month <= 9){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №5</h3>
	<p>${month} месяц относиться к 3 кварталу</p>`
} else if (month <= 12){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №5</h3>
	<p>${month} месяц относиться к 4 кварталу</p>`
} else {
	document.getElementById('command__text').innerHTML +=`
	<h3>Задча №5</h3>
	<p>Неккоректно введены данные!</p>`
}