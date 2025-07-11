// Задача 1
// function generateRandomArray(length, min, max) {
// 	let arrayNumber = [];
// 	for(let i = 0; i < length; i++){
// 		let randomNumber = Math.round(Math.random(min, max) * 10);
// 		arrayNumber.push(randomNumber)
// 	}

// 	return arrayNumber;
// }

// let randomArray = generateRandomArray(5, 1, 10);
// console.log(randomArray); // [3, 7, 1, 9, 6]

// Задача 2

// function calculateAverageAndRound(grades){
// 	let result = {
// 		rounded: null,
// 		floored: null,
// 		ceiled: null
// 	}

// 	let sumGrades = grades.reduce((accumulator, element) => accumulator + element)

// 	let averageSumGrades = sumGrades / grades.length;

// 	result.rounded = Math.round(averageSumGrades);
// 	result.floored = Math.floor(averageSumGrades);
// 	result.ceiled = Math.ceil(averageSumGrades);

// 	return result;
// }

// let grades = [78.5, 82.3, 91.7, 87.2, 69.8];
// let roundedGrades = calculateAverageAndRound(grades);
// console.log(roundedGrades);
// // { rounded: 82, floored: 81, ceiled: 82 }


// Задача 3 
// function generatePassword(length) {
//     const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
// 	let password = "";

// 	for (let i = 0; i < length; i++){
// 		password += charset[Math.floor(Math.random() * charset.length)]
// 	}

// 	return password;
// }

// console.log(generatePassword(12)); // Пример вывода: "aB3#dE9!xYz"

//Задача 4

function timeOfFall(height){
	height = height / 100
	let g = 9.8 // m.s
	let time = Math.round(Math.sqrt((2 * height) / g))
	return time;
}

console.log(timeOfFall(12000))