const randomNumbersGenerator = {
  getSingleRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
  },
};

module.exports = randomNumbersGenerator;
