const randomNumbersGenerator = {
  getRandomNumbers(numberCount, maxValue) {
    const resultNumbers = Array(numberCount)
      .fill("")
      .map(() => this.getSingleRandomNumber(maxValue));
    return resultNumbers;
  },

  getSingleRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
  },
};

module.exports = randomNumbersGenerator;
