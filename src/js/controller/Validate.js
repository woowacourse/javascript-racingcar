import { CAR_NAME_LENGTH, MIN_RACE_COUNT } from "../constants/games.js";

export const CarNameValidation = {
  isValidLengthAll(carNamesArray) {
    for (let index = 0; index < carNamesArray.length; index++) {
      if (!this.isValidLength(carNamesArray[index])) {
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

export const RacingCountValidation = {
  isValidRange(count) {
    return count >= MIN_RACE_COUNT;
  },
};
