const Console = require("./utils/Console");
const {
  ERROR,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  MIN_PARTICIPATE,
} = require("./constants");

const ValidateCarName = {
  validate(carNames) {
    this.validateCarNameLength(carNames);
    this.validateCarNameDuplicated(carNames);
    this.validateIsRace(carNames);
  },

  validateCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (
        carName.length < NAME_MIN_LENGTH ||
        carName.length > NAME_MAX_LENGTH
      ) {
        throw ERROR.CAR_NAME_LENGTH;
      }
    });
  },

  validateCarNameDuplicated(carNames) {
    const carSet = new Set(carNames);
    if (carNames.length !== carSet.size) {
      throw ERROR.CAR_NAME_DUPLICATED;
    }
  },

  validateIsRace(carNames) {
    if (carNames.length < MIN_PARTICIPATE) {
      throw ERROR.NOT_A_RACE;
    }
  },
};

module.exports = ValidateCarName;
