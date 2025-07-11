let button = document.getElementById('clikButton');
let liveColor = '#333';
let currentCount = 0;

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
};

button.addEventListener('click', function(){
    let colorRandom = getRandomColor();
    button.style.background = colorRandom;

    currentCount++;
    console.log(currentCount)
    if(currentCount === 3){
        button.style.background = liveColor;
        currentCount = 0;
    }
});