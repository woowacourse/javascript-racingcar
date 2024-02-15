const carNamesValidator = {
  isUnique(carNames) {
    const carNamesSet = new Set(carNames);

    if (carNames.length !== carNamesSet.size) {
      throw new Error('[ERROR]');
    }
  },

  isValidLength(carNames) {
    if (carNames.some((name) => name.length < 1 || carNames.length > 5)) {
      throw new Error('[ERROR]');
    }
  },

  validate(carNames) {
    const carNamesArray = carNames.split(',');
    this.isValidLength(carNamesArray);
    this.isUnique(carNamesArray);
  },
};

export default carNamesValidator;
