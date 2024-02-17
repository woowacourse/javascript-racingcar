class RandomNumber {
  static pickNumberInRange(start, end) {
    const range = [start, end].sort((a, b) => a < b);
    const [first, last] = range;

    return Math.floor(Math.random() * (last - first + 1)) + first;
  }
}

export default RandomNumber;
