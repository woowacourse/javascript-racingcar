const MovingDecider = {
  MOVING_CONDITION_NUMBER: 4,
  decide(carNumber, generateRandomNumber) {
    return Array.from(
      { length: carNumber },
      () => generateRandomNumber() >= MovingDecider.MOVING_CONDITION_NUMBER,
    );
  },
};

module.exports = MovingDecider;
