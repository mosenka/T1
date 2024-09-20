export const discountedPriceAdapter = (price: number, discountPercent: number): number => {
	if (discountPercent < 0 || discountPercent > 100) {
		throw new Error('Размер скидки должен быть в диапазоне от 0 до 100')
	}

	const discountedAmount = 1 - discountPercent / 100

	const discountedPrice = price * discountedAmount

	return parseFloat(discountedPrice.toFixed(2))
}
