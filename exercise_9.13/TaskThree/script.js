// Задача 1
// async function asyncTimer(ms) {
// 	let promise = new Promise((resolve) => {
// 		setTimeout(function() {
// 			resolve(`Таймер заверешен прошло: ${ms / 1000} секунды`)
// 		}, ms)
// 	})

// 	let result = await promise;
// 	console.log(result)
// } 


// asyncTimer(4000);

// Задача 2
// async function runTasksSimultaneously(task){
// 	let promise = Promise.all(task);
// 	let res = await promise;
// 	return res
// }

// const task1 = () => new Promise(res => setTimeout(() => res('Task 1'), 1000));
// const task2 = () => new Promise(res => setTimeout(() => res('Task 2'), 500));

// runTasksSimultaneously([task1(), task2()])
//   .then(res => console.log(res)); // 👉 ["Task 1", "Task 2"] (появятся после обеих)

// Задача 3

async function asyncQueue(tasks){
	for(let task of tasks){
		const res = await task();
		console.log(res)
	}
}


// Пример асинхронных задач
let tasks = [
    () => new Promise((resolve) => setTimeout(() => resolve("Задача 1 выполнена"), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve("Задача 2 выполнена"), 500)),
    () => new Promise((resolve) => setTimeout(() => resolve("Задача 3 выполнена"), 1500))
];

// Вызов функции
asyncQueue(tasks);