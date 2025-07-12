let result = document.getElementById("data_result")
const visitCount = localStorage.getItem("visits");

if (visitCount === null){
	result.textContent = 'Добро пожаловать! Это ваш первый везит'
	localStorage.setItem("visits", 0);
} else {
	const newCount = parseInt(visitCount) + 1;
	localStorage.setItem("visits", newCount);
	result.textContent = `Вы посещали данную страницу ${newCount} раз`
}