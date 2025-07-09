//Task #1
function square(a){
	return a**2;
}

function calculate() {
    let input = document.getElementById('number').value;
    let result = square(Number(input));
	console.log(input)
    document.getElementById('result').textContent = "Результат: " + result;
}

document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
    <input id="number" type="number" placeholder="Введите число">
    <button onclick="calculate()">Посчитать</button>
    <p id="result">Задача №1 <br> Вычисляет квадрат числа <br> введите либое число!</p>
`;

//Task #2
let res;

function compare(a, b){
	if(a > b){
		res = `коэффицент а больше b`
	} else if (a === b){
		res = `коэффицент а равен b`
	} else {
		res = `коэффицент а меньше b`
	}

	return res;
}

function calculateTwo(){
	let input1 = document.querySelector('.number1').value;
	let input2 = document.querySelector('.number2').value;
	let a = Number(input1);
	let b = Number(input2);
	console.log(input1);
	document.getElementById('result2').textContent = "Результат: " + compare(a, b);
}

document.getElementById('command__text').innerHTML += `
	<h3>Задача №2</h3>
    <input class="number1" id="number" type="number" placeholder="Введите число">
	<input class="number2" id="number" type="number" placeholder="Введите число">
    <button onclick="calculateTwo()">Посчитать</button>
	<p id="result2">Задача №2 <br> Сравниваем два числа a и b</p>
`;

//Task #2
function trimSpaces(str){
	return str.trim();
}

function calculateThree(){
	let input = document.getElementById('string').value;
	let res = trimSpaces(String(input));
	document.getElementById('result3').textContent = "Результат: " + res;
}

document.getElementById('command__text').innerHTML += `
<h3>Задача №3</h3>
<input id="string" type="string" placeholder="Введите строку">
<button onclick="calculateThree()">Убрать пробелы</button>
<p id="result3">Задача №3 <br> Убираем пробелы с помощью trim()</p>
`