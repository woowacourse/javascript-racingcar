class RandomNumberGenerator {
  constructor() {}
  static pickRandomNumber(start = 0, end = 0) {
    return Math.floor(Math.random() * (end - 1)) + start;
  }
}

export default RandomNumberGenerator;
