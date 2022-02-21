import {
  NUMBER_OF_CARS_RANGE,
  RACING_COUNT_RANGE,
  CAR_NAME_LENGTH_RANGE,
} from '../configs/constants.js';

const validator = {
  isNotValidNumberOfCars: (carNameList) =>
    !(
      carNameList.length >= NUMBER_OF_CARS_RANGE.MIN &&
      carNameList.length <= NUMBER_OF_CARS_RANGE.MAX
    ),
  isNotValidCarNamesLength: (carNameList) =>
    !carNameList.every(
      (name) =>
        name.length >= CAR_NAME_LENGTH_RANGE.MIN &&
        name.length <= CAR_NAME_LENGTH_RANGE.MAX
    ),
  isDuplicatedCarName: (carNameList) =>
    carNameList.length !== new Set(carNameList).size,
  isNotValidRacingCount: (racingCount) =>
    !Number.isInteger(racingCount) ||
    racingCount <= RACING_COUNT_RANGE.MIN ||
    racingCount > RACING_COUNT_RANGE.MAX,
  isCarListNotFound: (carList) => !carList.length,
};

export default validator;
