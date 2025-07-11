//Задача 1

// let User = {
// 	userId: 1,
// 	firstName: 'Jhon',
// 	age: 21
// };


// function fetchUserData(ms){
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(User), ms);
// 	});
// }

// fetchUserData(2000).then((data) =>{
// 	console.log(data);
// })

// Задача 2

// let errorPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => reject('Ошибка'), 1000)
// });

// errorPromise.then((data) =>{
// 	console.log(data);
// }).catch((error) =>{
// 	console.log(error);
// })

// Задача 3

// function delayResponse(ms){
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(`Задержка на ${ms / 1000} секунды!`), ms);
// 	});
// }

// delayResponse(4000).then((data) =>{
// 	console.log(data);
// })


