// // Задача 1

// function calculatePrice({basePrice, taxRate, discount} = product){
// 	return basePrice + (basePrice * taxRate) - discount;
// }

// const product = {
//     basePrice: 100,
//     taxRate: 0.2,
//     discount: 10
// };

// const finalPrice = calculatePrice(product);
// console.log(finalPrice); // 110

// Задача 2 

function startReminders(reminders){
	reminders.forEach(reminders => {
		const {message, delay} = reminders
		setTimeout(() => {
			console.log(message)
		}, delay)
	});
}


const reminders = [
    { message: 'Meeting with team', delay: 3000 },
    { message: 'Lunch break', delay: 5000 },
    { message: 'Call client', delay: 7000 }
];


// Запуск всех напоминаний
startReminders(reminders);