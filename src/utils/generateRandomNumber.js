export default function generateRandomNumber({ from, to }) {
	return Math.floor(Math.random() * (to - from + 1)) + from;
}
