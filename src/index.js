module.exports = function check(str, bracketsConfig) {
	let currentValue;
	bracketsConfig.forEach(() => {
		let count = bracketsConfig.length
		while (count > 0) {
			currentValue = bracketsConfig[count - 1].join('')
			if (str.includes(currentValue)) {
				str = str.replace(currentValue, '')
			}
			else {
				count--
			}
		}
	})
	return str.length === 0 ? true : false
}