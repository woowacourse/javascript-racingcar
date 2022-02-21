import { CAR_NAME_LENGTH, MIN_RACE_COUNT } from "../constants/games.js";

export const carNameValidation = {
  isValidLengthAll(carNamesArray) {
    for (let i = 0; i < carNamesArray.length; i++) {
      if (!this.isValidLength(carNamesArray[i])) {
        return false;
      }
    }

    return true;
  },

  isValidLength(carName) {
    return (
      carName.length >= CAR_NAME_LENGTH.MIN &&
      carName.length <= CAR_NAME_LENGTH.MAX
    );
  },

  isDuplicatedName(carNamesArray) {
    return carNamesArray.length !== new Set(carNamesArray).size;
  },
};

export const racingCountValidation = {
  isValidRange(count) {
    return count >= MIN_RACE_COUNT;
  },
};
