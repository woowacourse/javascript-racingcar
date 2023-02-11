class Random {
  static pickNumberInRange(start, end) {
    const mathCeil = Math.ceil(start);

    return Math.floor(Math.random() * (end + 1 - mathCeil)) + mathCeil;
  }
}

module.exports = Random;
