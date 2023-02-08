const MovingDecider = {
  decide(carNumber, generateRandomNumber) {
    return Array.from({ length: carNumber }, () => generateRandomNumber() >= 4);
  },
};

module.exports = MovingDecider;
