// Задача 10. Дано масив цін у грн. 
// Податок складає 20%. Сформувати масив, 
// який буде містити величину сплаченого податку у грн.

if (confirm('Почати тестування?')) {

	const prices = [1200, 3500, 750, 4900, 2200]
	const taxRate = 0.2

	const taxes = prices.map(price => (price * taxRate).toFixed(2))

	
	document.write(`Ціни: ${prices.join(', ')} грн<br>`)
	document.write(`Сума податку для кожної ціни: ${taxes.join(', ')} грн`)
}

