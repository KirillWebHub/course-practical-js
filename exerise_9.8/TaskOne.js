// const person = {
// 	firstName: "Kriill",
// 	lastName: "WebHub",
// 	age: 21
// };


// const {firstName, lastName, age } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// let book = {
// 	title: 'White Night',
// 	author: 'Dostaevsky',
// 	year: '2025'
// };

// const {title: bookTitle, author: bookAuthor} = book;

// console.log(bookTitle);
// console.log(bookAuthor);

// let settings = {
// 	theme: 'black',
// 	layout: '{task}'
// };

// const {theme, layout, language = 'en'} = settings;

// console.log(theme);
// console.log(layout);
// console.log(language);

// let company = {
// 	name: 'kirill',
// 	addres: {
// 		city: 'SPb',
// 		street: 'Kolotushkina'		
// 	}
// };

// let {name, addres: {city, street}} = company;

// console.log(name);
// console.log(city);
// console.log(street);

let user = {
	name: 'kirill',
	age: 21,
	email: 'example@gmail.com'
};

const {name, ...rest} = user;

console.log(name);
console.log(rest);