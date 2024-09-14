export const getRandomUUID = (length: number = 10): string => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let result: string = ''
	const randomArray = new Uint8Array(length)
	crypto.getRandomValues(randomArray)
	randomArray.forEach(number => {
		result += chars[number % chars.length]
	})
	return result
}
