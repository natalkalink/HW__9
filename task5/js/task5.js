// Задача 5. Дано масив елементів. Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {

	// Функція для генерації масиву випадкових чисел
	function generateRandomNumbers(count, min, max) {
		const arr = []
		for (let i = 0; i < count; i++) {
			const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
			arr.push(randomNum)
		}
		return arr
	}

	// Функція для обчислення добутку додатніх чисел
	function calculateProductOfPositiveNumbers(arr) {
		let product = 1

		for (const element of arr) {
			if (element > 0) {
				product *= element
			}
		}

		if (product === 1) {
			return 0
		} else {
			return product
		}
	}


	const count = parseInt(prompt('Введіть кількість елементів:'))
	const min = parseInt(prompt("Введіть мінімальне значення (може бути від'ємним):"))
	const max = parseInt(prompt('Введіть максимальне значення:'))

	// Генеруємо масив випадкових чисел
	const randomNumbers = generateRandomNumbers(count, min, max)

	// Обчислюємо добуток додатніх чисел
	const productOfPositiveNumbers = calculateProductOfPositiveNumbers(randomNumbers)

	// Виводимо результати
	document.write(`<div>Згенерований масив: ${randomNumbers}</div>`)
	document.write(`<div>Добуток додатніх чисел: ${productOfPositiveNumbers.toFixed(2)}</div>`)


}
