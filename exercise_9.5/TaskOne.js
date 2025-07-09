//Task #1
function removeFirstAndLast(arr){
    arr.shift();
    arr.pop();
    return arr;
}

let arr = [1,2,3,4,5,6];
console.log(removeFirstAndLast(arr))

//Task #2
function removeFalsyValues(arr){
    let result = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i]){
            result[result.length] = arr[i]
        }
    }
    return result;
}

let arr1 = [12, false, 0, 1, null, 2, undefined, NaN];
console.log(removeFalsyValues(arr1));

//Task #3
function sumEvenNumbers(arr){
    let summCh = 0;
    for (let i = 0; i <= arr.length; i++){
        if(arr[i] % 2 == 0){
            summCh += arr[i];
        }
    }
    return summCh;
}

let arr3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(sumEvenNumbers(arr3));

//Task #4
function filterArray(arr, filter){
    let newArray = arr.filter(numbers => numbers > filter);
    return newArray
}

let arr4 = [-1, -120, -43, 20, 30, 40];
let filter = 0;

console.log(filterArray(arr4, filter));