//Task #1
let num = Number(prompt('Введите число: '));

if (num < 0){
	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Число не может быть отрицательным!</p>`
} else if(num == 1){
	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Число равняеться: ${num}</p>`
} else{
	let res = 1;
	for (let i = 2; i <= num; i++){1
		res *= i;
	}

	document.getElementById('command__text').innerHTML += `
	<h3>Задача №1</h3>
	<p>Факториал числа ${num} являеться ${res}</p>`
}

// //Task #2
// let number = 20;
// let arrHonest = [];
// let arrOdd = [];
// for(let i = 0; i <= number; i++){
// 	if(i % 2 == 0){
// 		arrHonest.push(i)
// 	} else{
// 		arrOdd.push(i)
// 	}
// }

// document.getElementById('command__text').innerHTML += `
// 	<h3>Задача №2</h3>
// 	<p>Четные чисел ${arrHonest}</p>
// 	<p>Нечетные чисел ${arrOdd}</p>`

let number = 0;
let arrHonest = [];
let arrOdd = []

while(number <= 20){
	if(number % 2 == 0){
		arrHonest.push(number)
	} else{
		arrOdd.push(number)
	}
	number++
}

document.getElementById('command__text').innerHTML += `
	<h3>Задача №2</h3>
	<p>Четные чисел ${arrHonest}</p>
	<p>Нечетные чисел ${arrOdd}</p>`


