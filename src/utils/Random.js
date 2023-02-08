class Random {
  static pickNumberInRange(start, end) {
    const startNumber = Math.ceil(start);

    return Math.floor(Math.random() * (end + 1 - startNumber)) + startNumber;
  }
}

module.exports = Random;
