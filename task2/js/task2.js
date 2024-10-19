// Задача 2. Користувач вводить кількість елементів. 
// Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.


if (confirm('Почати тестування?')) {

	const elementsNumber = parseInt(prompt('Введіть кількість елементів масиву', ''))

	const middleOfArray = Math.ceil(elementsNumber / 2)

	const arr = new Array(elementsNumber).fill(1, 0, middleOfArray).fill(7, middleOfArray)

	document.write(`<div>Масив з ${elementsNumber} елементів: ${arr}.</div>`)
}

// ----------рішення з використ. циклiв----------
// if (confirm('Почати тестування?')) {

// 	let elementsNumber = parseInt(prompt('Введіть кількість елементів масиву', ''))
// 	let arr = []
// 	let middleOfArray = Math.ceil(elementsNumber / 2)

// 	for (let i = 0; i < middleOfArray; i++) {
// 		arr[i] = 1
// 	}
// 	for (let i = middleOfArray; i < elementsNumber; i++) {
// 		arr[i] = 7
// 	}
// 	document.write(`<div>Масив з ${elementsNumber} елементів: ${arr}.</div>`)
// }