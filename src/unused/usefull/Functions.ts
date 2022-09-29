export function binarySearch(array: number[], target: number) {
	let min = 0
	let max = array.length - 1

	while (true) {
		const mid = Math.round((min + max) / 2)

		if (target === array[mid]) return mid

		if (target < array[mid]) max = mid - 1
		else min = mid + 1

		if (min > max) return false
	}
}

export function decimalIsValid(value: string, decimals: number = 2): boolean {
	if (/[.,]/.test(value) && value.split(/[.,]/)[1].length > decimals) {
		return false
	} else if (/^\d*[.,]?\d*$/.test(value)) {
		return true
	} else return false
}