let input = document.getElementById('inputData');
let button = document.getElementById('clikButton')

function reverseStr(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

button.addEventListener('click', function(){
    input.value = reverseStr(input.value)
});