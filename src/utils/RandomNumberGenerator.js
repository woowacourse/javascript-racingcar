class RandomNumberGenerator {
  constructor() {}
  static pickRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}

export default RandomNumberGenerator;
