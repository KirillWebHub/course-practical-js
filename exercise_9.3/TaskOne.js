//Task #1
let age = Number(prompt());
let pass = (age >= 18) ? "совершеннолетним, пропуск разрешен" : "несовершеннолетним, пропуск запрещен";
document.getElementById('command__text').innerHTML += 
		`<h3>Задание №1</h3>
		<p>Участник является ${pass}</p>`

//Task #2
let month = Number(prompt());
switch (month){
	case 1: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Январь</p>`
	break

	case 2: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Февраль</p>`
	break

	case 3: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Март</p>`
	break

	case 4: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Апрель</p>`
	break

	case 5: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Май</p>`
	break

	case 6: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Июнь</p>`
	break

	case 7: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Июль</p>`
	break

	case 8: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Август</p>`
	break

	case 9: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Сентябрь</p>`
	break

	case 10: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Октябрь</p>`
	break

	case 11: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Ноябрь</p>`
	break

	case 12: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Вы выбрали месяц: Декабрь</p>`
	break

	default: 
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №2</h3>
	<p>Ошибка: неккоректно введенные данные!</p>`

}

//Task #3
let num = Number(prompt());

if (num > 0){
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №3</h3>
	<p>Число ${num} положительное </p>`
} else if (num == 0) {
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №3</h3>
	<p>Число ${num} равно 0 </p>`
} else {
	document.getElementById('command__text').innerHTML +=`
	<h3>Задани №3</h3>
	<p>Число ${num} отрицательное </p>`
}