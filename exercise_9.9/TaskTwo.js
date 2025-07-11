// Задача 1

// function isPalindrome(str) {
//   const lowerStr = str.toLowerCase();
//   const cleanStr = lowerStr.replace(/[^a-z]/g, '');
//   const reversedStr = cleanStr.split('').reverse().join('');
//   return cleanStr === reversedStr;
//   }
  
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("Hello, world!")); // false

// Задача 2

// function solveQuadratic (a, b, c) {
//     let D = Math.pow(b, 2) - 4 * a * c;

//     if (D &gt; 0){
//         let x1 = (-b + Math.sqrt(D)) / (2 * a);
//         let x2 = (-b - Math.sqrt(D)) / (2 * a);
//         return `Корни уравнения: x1 = ${x1}, x2 = ${x2}`
//     } else if (D == 0) {
//         let x1 = -b / (2 * a);
//         return `Уравнение имеет один корень: x1 = ${x1}`
//     } else {
//         return "Уравнение не имеет действительных корней"
//     }
// }

// console.log(solveQuadratic(1, -3, 2)); // Корни уравнения: x1 = 2, x2 = 1
// console.log(solveQuadratic(1, 2, 1)); // Уравнение имеет один корень: x = -1
// console.log(solveQuadratic(1, 0, 1)); // Уравнение не имеет действительных корней

// Задача 3

// function triangleArea (a, b){
//     return `Площадь треугольника: ${(a * b) / 2}`
// }

// console.log(triangleArea(3, 4)); // Площадь треугольника: 6
// console.log(triangleArea(5, 12)); // Площадь треугольника: 30

// Задача 4

function findExtremes(arr){
    let number = {
        max: 0,
        min: 0
    };

    if (!arr || arr.length === 0) {
        return null;
    } else {
        number.max = Math.max(...arr);
        number.min = Math.min(...arr);
        return number;
    }
    
}

console.log(findExtremes([3, 5, 7, 2, 8])); // { max: 8, min: 2 }
console.log(findExtremes([-3, -5, -7, -2, -8])); // { max: -2, min: -8 }
console.log(findExtremes([])); // null