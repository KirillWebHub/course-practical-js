// Задача 2
const result = document.getElementById('data_result');
const inputValue = document.getElementById('input_value');
const button = document.getElementById('data_value');
const removeButton = document.getElementById('removeButton')
const userName = localStorage.getItem('userName');

removeButton.style.display = 'none'

if(userName === null){
	result.textContent = 'Ты кто такой? Я тебя не знаю!'
} else if (userName === userName){
	result.textContent = `О, я тебя знаю ты ${userName}`
	button.style.display = 'none'
	inputValue.style.display = 'none'
	removeButton.style.display = 'flex'
} else{
	result.textContent = `Привет, ${userName}`
	button.style.display = 'none'
	inputValue.style.display = 'none'
}

button.addEventListener('click', function(){
	if(inputValue.value === ''){
		alert('Введите имя!!!!!!!!!!!!!!')
	}

	localStorage.setItem('userName', inputValue.value)
	result.textContent = `Привет, ${inputValue.value}!`
	button.style.display = 'none'
	inputValue.style.display = 'none'
	removeButton.style.display = 'flex'
})

// Задача 3
function deleteUsername(){
	console.log('Имя пользователя успешно удалено')
	return localStorage.removeItem('userName');
}

removeButton.addEventListener('click', deleteUsername);