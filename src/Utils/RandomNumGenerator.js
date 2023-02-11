class RandomNumGenerator {
  static generateNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

module.exports = RandomNumGenerator;
