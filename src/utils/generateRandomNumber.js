export default function generateRandomNumber(range) {
	return Math.floor(Math.random() * (range.to - range.from + 1)) + range.from;
}
