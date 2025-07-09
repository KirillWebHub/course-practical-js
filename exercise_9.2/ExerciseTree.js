// Задача №1
let a = Number(prompt('Введите число a: '));
let b = Number(prompt('Введите число b: '));
let res = a * b;

document.getElementById('command__text').innerHTML = 
		`<h3>Задач №1<h3>
		<p>
		Результат вычисления 
		площади прямоугольника: ${res}
		</p>`;

// Задача №2
let str_hello = 'hello';
let str_world = 'world';
let res_str = str_hello + ' ' + str_world;

document.getElementById('command__text').innerHTML += 
		`<h3>Задач №2<h3>
		<p> 
		Результат сложения строк: ${res_str}
		</p>`;

// Задача №3 
let degree = 5 ** 2;

document.getElementById('command__text').innerHTML += 
		`<h3>Задач №3<h3>
		<p> 
		Результат возведения в степень: ${degree}
		</p>`;


