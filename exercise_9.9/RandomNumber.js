function RandomNumber(min, max){
	let random = Math.round(Math.random() * (max - min + 1)) + min
	let currentAttempt = 0;

	while (true){
		let userInputNumber = Number(prompt(`Вводи числа в указанном тобой диапозоне от ${min} до ${max}`))
		if(userInputNumber === random && currentAttempt <= 5){
			console.log(`Вы угадали число: ${random}`)
			break
		} else {
			console.log(`Вы не угадали число. Вы истратили ${++currentAttempt} попытку`)
			if(currentAttempt >= 5){
				console.log(`Вы проиграли, числом было: ${random}`)
				break
			}
		}
	}
}

let minNumber = Number(prompt('Введите минимальное число'));
let maxNumber = Number(prompt('Введите максимальное число'));


if(!isNaN(minNumber) && !isNaN(maxNumber)){
	if(!(maxNumber <= minNumber)){
		console.log(RandomNumber(minNumber, maxNumber));
	} else{
		alert('Максимальное число меньше минимального')
	}
} else {
	alert('Неккоретное значение')
}