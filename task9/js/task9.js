// Задача 9. Дано масив імен. Сформувати масив з перших літер цих імен.


if (confirm('Почати тестування?')) {

	const names = ['Марiя', 'Роман', 'Iван', 'Якiв']

	function getFirstLetters(namesArr) {
		return namesArr.map(name => name[0])
	}

	const firstLetters = getFirstLetters(names)

	document.write(`Перші літери імен: ${firstLetters.join(', ')}`)
}