const RandomGenerator = {
  generateRandomNumbers(length) {
    return Array(length).fill().map(() => Math.floor((Math.random() * 10)))
  }
};

module.exports = RandomGenerator;
