// Задача 1
// function fetchData(arr){
// 	return Promise.all(arr).then((value) => {
// 		console.log(value);
// 	}).catch((error) => {
// 		console.log(error)
// 	})
// }

// // Пример вызова с массивом промисов
// const promise1 = Promise.resolve('Данные 1');
// const promise2 = Promise.resolve('Данные 2');
// const promise3 = Promise.reject('Ошибка при получении данных');
// fetchData([promise1, promise2, promise3]);

// Задача 2
// function raceToFinish(arr){
// 	return Promise.race(arr).then((value) => {
// 		console.log(`Результат: ${value}`)
// 	}).catch((error) => {
// 		console.log(`Ошибка: ${error}`)
// 	})
// }


// // Пример вызова
// const slowPromise = new Promise((resolve) => setTimeout(resolve, 3000, 'Медленный ответ'));
// const fastPromise = new Promise((resolve) => setTimeout(resolve, 1000, 'Быстрый ответ'));
// raceToFinish([slowPromise, fastPromise]);

// Задача 3
// function getFirstSuccessful(arr){
// 	return Promise.any(arr).then((value) => {
// 		console.log(value)
// 	}).catch((error) => {
// 		console.log(error);
// 	})
// }


// const promise1 = Promise.reject('Ошибка 1');
// const promise2 = Promise.reject('Ошибка 2');
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'Успех!'));
// getFirstSuccessful([promise1, promise2, promise3]);

// Задача 4

function getAllResults(arr){
	return Promise.allSettled(arr).then((value) => {
		value.forEach((value) => console.log(value))
	})
}

const promise1 = Promise.resolve('Задача выполнена');
const promise2 = Promise.reject('Ошибка задачи');
getAllResults([promise1, promise2]);