//Task #1
function add(a, b){
	return a + b;
}

let num1 = Number(prompt('Первое число: '));
let num2 = Number(prompt('Второе число: '));

document.getElementById('command__text').innerHTML += `
<h3>Задача №1</h3>
<p>Сумма двух введенных чисел: ${add(num1, num2)}</p>`

//Task #2
function multiplay(a, b){
	return a * b;
}

document.getElementById('command__text').innerHTML += `
<h3>Задача №2</h3>
<p>Произведение двух введенных чисел: ${multiplay(num1, num2)}</p>`

//Task #3
function power(base, exponent){
	return base ** exponent;
}

document.getElementById('command__text').innerHTML += `
<h3>Задача №2</h3>
<p>Возведение одного числа в другое: ${power(num1, num2)}</p>`

//Task #4 
function isEven(par){
	if(par % 2 == 0) {
		return document.getElementById('command__text').innerHTML += `
		<h3>Задача №3</h3>
		<p>Число четное ${num1}</p>`
	} else {
		return document.getElementById('command__text').innerHTML += `
		<h3>Задача №3</h3>
		<p>Число нечетное ${num1}</p>`
	}
}

isEven(num1)

//Task #5
function greet(name = " Гость"){
	return 'Привет' + name + '!';
}

let nameUser = prompt();
if (!nameUser){
	document.getElementById('command__text').innerHTML += `
			<h3>Задача №4</h3>
			<p>${greet()}</p>`
} else{
	document.getElementById('command__text').innerHTML += `
			<h3>Задача №4</h3>
			<p>${ greet(nameUser)}</p>`
}