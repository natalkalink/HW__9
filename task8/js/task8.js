// Задача 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm('Почати тестування?')) {
	
	const carNumbers = ['AA1234BB', 'BC5678CD', 'AE9876GH', 'A123BC', 'AB7890CD', 'CC1111DD']

	const result = carNumbers.filter((carNumber) => carNumber.startsWith('A'))

	// const result = carNumbers.filter((carNumber) => carNumber[0] === 'A')

	// const result = carNumbers.filter(function(carNumber) {
  	// return carNumber[0] === 'A'
	// 	})

	
	
	// Використ. forEach 
	// const result = []
	// carNumbers.forEach(function(carNumber) {
	// 	if (carNumber[0] === 'A') {
	// 		result.push(carNumber)
	// 	}
	// 	return result
	// })


	document.write(`Номери авто, які починаються на "А": ${result.join(', ')}`)

}















// if (confirm('Почати тестування?')) {
	
// 	// Масив номерів авто

// 	const carNumbers = ['AA1234BB', 'BC5678CD', 'AE9876GH', 'A123BC', 'AB7890CD', 'CC1111DD']

// 	// Функція для фільтрації номерів, які починаються на "А"
// 	function filterCarNumbersByA(carNumbers) {
// 		return carNumbers.filter(number => number.startsWith('A'))
// 	}

// 	// Створюємо новий масив з відфільтрованими номерами
// 	const filteredCarNumbers = filterCarNumbersByA(carNumbers)

// 	// Виводимо відфільтрований масив
// 	document.write(`Номери авто, які починаються на "А": ${filteredCarNumbers}`)

// }