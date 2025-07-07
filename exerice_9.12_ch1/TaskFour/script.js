// let slide = document.getElementById('slideBar');
// document.getElementById('slideBar').classList.add('active');

function getRandomOclock(){
    return Math.floor(Math.random() * (10 - 5) + 5) * 1000
}

let randomTimeS = getRandomOclock()
console.log(randomTimeS)

setTimeout(function(){
    document.getElementById('slideBar').classList.add('active');
}, randomTimeS);

