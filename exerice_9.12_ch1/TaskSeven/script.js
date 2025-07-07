let data = document.getElementById('inputData');
let secretCode = 'ILoveCodding';
let buffer = '';

data.addEventListener('keypress', function(event){
    console.log(event.key);
    buffer += event.key

    if(buffer.includes(secretCode)){
        alert('Вы активировали секретный код')
        buffer = '';
    }

    if (buffer.length > secretCode.length * 2) {
        buffer = inputBuffer.slice(-secretCode.length);
    }
}); 