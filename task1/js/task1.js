// Задача 1. 
// Користувач вводить кількість елементів. 
// Створити масив, що складається з вказаної кількості елементів заповнених нулями.


if (confirm('Почати тестування?')) {

	let numberOfElements = parseInt(prompt("Введіть кількість елементів:"))
	let array = new Array(numberOfElements).fill(0)

	document.write(`Масив з ${numberOfElements} елементiв ${array}`)
}


