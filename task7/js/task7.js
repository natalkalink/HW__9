
// Задача 7. Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

if (confirm('Почати тестування?')) {

	const prices = [1200, 800, 1500, 500, 2000, 950]
	const discountRate = 0.3


	const modifiedPrices = prices.map(function (price) {
		if (price > 1000) {
			return price * (1 - discountRate)
		} else {
			return price
		}
	});


	document.write(`Оригінальні ціни: ${prices.join(', ')} грн<br>`)
	document.write(`Ціни зі знижками: ${modifiedPrices.map(price => price.toFixed(2)).join(', ')} грн`)
}

