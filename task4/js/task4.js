// Задача 4. Дано масив елементів. Вивести на екран елементи, що більші за 100


if (confirm('Почати тестування?')) {

	// Функція для генерації масиву випадкових чисел
	function generateRandomNumbers(count, min, max) {
		const arr = []
		for (let i = 0; i < count; i++) {
			const randomNum = Math.floor(Math.random() * (max - min + 1)) + min // Генеруємо випадкове число
			arr.push(randomNum) // Додаємо його до масиву
		}
		return arr
	}

	// Функція для виведення чисел більших за 100
	function displayNumbersGreaterThan100(arr) {
		for (const element of arr) {
			if (element > 100) {
				document.write(`<div>${element}</div>`) // Виводимо на екран елементи, більші за 100
			}
		}
	}


	const count = parseInt(prompt('Введіть кількість елементів:'))
	const min = parseInt(prompt('Введіть мінімальне значення:'))
	const max = parseInt(prompt('Введіть максимальне значення:'))

	// Генеруємо масив випадкових чисел
	const randomNumbers = generateRandomNumbers(count, min, max)

	// Виводимо числа, що більші за 100
	displayNumbersGreaterThan100(randomNumbers)

}
