// Задача 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Почати тестування?')) {

	const elements = [3, 5, 1, 8, 12, 4]
	const firstElement = elements[0]


	const modifiedElements = elements.map(function (element) {
		if (element > firstElement) {
			return element * 2
		} else {
			return element
		}
	})

	// const modifiedElements = elements.map(element => element > firstElement ? element * 2 : element)

	document.write(`Оригінальний масив: ${elements.join(', ')}<br>`)
	document.write(`Модифікований масив: ${modifiedElements.join(', ')}`)
}
