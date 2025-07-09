// Задач №1
let percent = 15 % 4;

document.getElementById('command__text').innerHTML += 
		`<h3>Задач №1: Выполнено <h3>
		<p> 
		Результат остаток деления: ${percent}
		</p>`;


// Задач №2
let targetNum = Number(prompt());

if (!isNaN(targetNum)){
	document.getElementById('command__text').innerHTML += 
		`<h3>Задач №2: Выполнено <h3>
		<p> 
		Значение является число: ${targetNum}
		</p>`;
} else {
	document.getElementById('command__text').innerHTML += 
		`<h3>Задач №2: Невыполнено <h3>
		<p> 
		Значение не является числом!
		</p>`;
}

// Здача №3
let i = 2;
document.getElementById('command__text').innerHTML += 
		`<h3>Задач №3: Выполнено</h3>
		<p> Значение i = ${i} до инкремента (i++;) </p>`;
i++;

document.getElementById('command__text').innerHTML += 
		`<p> Значение i = ${i} после инкремента (i++;) </p>`;






