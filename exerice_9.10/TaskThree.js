// Задача 1
// function createTimer(){
//     let startTime;

//     return {
//         start (){
//             startTime = Date.now();
//         },

//         stop(){
//             const secondTime = (Date.now() - startTime) / 1000;
//             startTime = null;
//             return secondTime;
//         }
//     }
// };


// const timer = createTimer();
// timer.start();
// setTimeout(() => {
//     console.log(timer.stop()); // Примерно 3 (зависит от времени выполнения)
// }, 5000);

// Задача 2

// function partial(fn, fixedValue){
//     return function(number){
//         return fn(fixedValue, number);
//     }
// };

// function sum(a, b) { return a + b; }
// const addFive = partial(sum, 5);
// console.log(addFive(10)); // 15

// Задача 3

// function memoizedFactorial(){
//     let cache = {};

//     return function(number) {
//         if(cache[number] !== undefined){
//             return cache[number];
//         }

//         let res = 1
//         for(let i = 2; i <= number; i++){
//             res *= i
//         }

//         cache[number] = res;
//         return res;
//     };
// }

// const factorial = memoizedFactorial();
// console.log(factorial(5)); // 120
// console.log(factorial(5)); // 120, быстрее, т.к. использует результат для 5

// Задача 4 

// function createFreezer(obj){
//     let currentObj = {...obj};
//     let isFrozen = false;
    
//     return {
//         get(key){
//             return currentObj[key];
//         },
//         set(key, value){
//             if(isFrozen) return;
//             currentObj[key] = value;
//             isFrozen = true;
//         }
//     }
// }

// const freezer = createFreezer({ name: 'Alice' });
// console.log(freezer.get('name')); // Alice
// freezer.set('name', 'Bob');
// console.log(freezer.get('name')); // Bob
// freezer.set('name', 'Charlie'); // Ничего не меняется
// console.log(freezer.get('name')); // Bob

// Задача 5

// function createProtectedResource(initialPassword) {
//     let currentPassword = initialPassword;

//     return {
//         access(inputPassword) {
//             if (inputPassword === currentPassword) {
//                 return 'Доступ разрешен';
//             } else {
//                 return 'Доступ запрещен';
//             }
//         },
//         changePassword(newPassword, oldPassword) {
//             if (oldPassword === currentPassword) {
//                 currentPassword = newPassword; 
//             }
//         }
//     };
// }

// const resource = createProtectedResource('mySecret');
// console.log(resource.access('wrongPassword')); // Доступ запрещен
// console.log(resource.access('mySecret')); // Доступ разрешен
// resource.changePassword('newSecret', 'mySecret');
// console.log(resource.access('newSecret')); // Доступ разрешен

// Задча 6

// function createSequence(start, step){
//     let currentStart = start - step;
    
//     return function () {
//         currentStart += step
//         return currentStart
//     }
// };

// const sequence = createSequence(10, 2);
// console.log(sequence()); // 10
// console.log(sequence()); // 12
// console.log(sequence()); // 14

// Задача 7

// function once(fn){
//     let result;
//     let called = false;

//     return function(){
//         if(!called){
//            result = fn();
//            called = true 
//         };
//         return result;
//     };
// };

// const initialize = once(() => console.log('Инициализация'));
// initialize(); // Инициализация
// initialize(); // (Ничего не выводит)

// Задча 8

function createSumTracker(){
    let count = 0
    return {
        add(number){
            count += number;
        },

        get(){
            return count;
        }
    }
}

const sumTracker = createSumTracker();
sumTracker.add(5);
sumTracker.add(10);
console.log(sumTracker.get()); // 15