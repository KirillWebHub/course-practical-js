// Задача №1
let str = 'key';
let num = 12;
let bool = true;
let bignum = 12123131231231231n;
let und;
let n = null;
let symbol = Symbol("id");
console.log(str, num, bool, bignum, und, n, symbol)
console.log('Задача №1: Выполнена')

// Задача №2
let firs_name = 'Kirill';
let age = 21;
console.log(`Меня зовут ${firs_name}, мне ${age} год`)
console.log('Задача №2: Выполнена')

// Задача №3
let ch = 10;
let ch_float = 10.12;
let ch_big = BigInt(100);
console.log(BigInt(ch) + BigInt(Math.floor(ch_float)) + ch_big);
console.log('Задача №3: Выполнена')

// Задача №4
let str_ch = '123';
let bool2 = false;
let str_bool = 'true'
console.log(typeof Number(str_ch), typeof Boolean(str_bool), typeof String(bool2))
console.log(Number(str_ch), Boolean(str_bool), String(bool2))
console.log('Задача №4: Выполнена')
