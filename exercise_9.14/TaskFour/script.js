const whiteButton = document.getElementById('whiteBackgroundColor');
const blackButton = document.getElementById('blackBackgroundColor');
const body = document.querySelector('body');
let userSettings = {};
let color = JSON.parse(localStorage.getItem('userSettings'));
console.log(color.theme)

if(color.theme === 'white'){
	body.style.background = 'white';
} else {
	body.style.background = 'black';
}


function getThemeWhite(){
	userSettings.theme = 'white'
	localStorage.setItem('userSettings', JSON.stringify(userSettings))
	let white = JSON.parse(localStorage.getItem('userSettings'));
	body.style.background = white.theme;
}

function getThemeBlack(){
	userSettings.theme = "black"
	localStorage.setItem('userSettings', JSON.stringify(userSettings))
	let black = JSON.parse(localStorage.getItem('userSettings'));
	body.style.background = black.theme;
}




whiteButton.addEventListener('click', getThemeWhite);
blackButton.addEventListener('click', getThemeBlack);

