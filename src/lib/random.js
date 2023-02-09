class Random {
  static pickNumberInRange(start, end) {
    return Math.floor(Math.random() * (end + 1 - start)) + start;
  }
}

module.exports = Random;
