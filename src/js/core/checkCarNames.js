import { $ } from '../util/dom.js';
import { ERROR_MESSAGES } from '../constants/constant.js';

const errorController = ({ isError, message }) => {
  if (isError) {
    window.alert(message);
  }
};

const isCorrectCarNamesInputCount = carNamesInput => {
  const isSuccess = carNamesInput.length >= 2;

  errorController({
    isError: !isSuccess,
    message: ERROR_MESSAGES.CAR_MIN_COUNT,
  });

  return isSuccess;
};

const isCorrectCarNameLength = carNamesInput => {
  const isSuccess =
    carNamesInput.filter(carName => carName.length > 5).length === 0;

  errorController({
    isError: !isSuccess,
    message: ERROR_MESSAGES.CAR_NAME_MAX_LENGTH,
  });

  return isSuccess;
};

const isUniqCarNames = carNamesInput => {
  const isSuccess = carNamesInput.length === new Set(carNamesInput).size;

  errorController({
    isError: !isSuccess,
    message: ERROR_MESSAGES.UNIQ_CAR_NAMES,
  });

  return isSuccess;
};

const isCorrectCarNames = carNamesInput => {
  return (
    isCorrectCarNamesInputCount(carNamesInput) &&
    isCorrectCarNameLength(carNamesInput) &&
    isUniqCarNames(carNamesInput)
  );
};

const carNamesValidation = carNamesInput => {
  let carNames = [];

  if (isCorrectCarNames(carNamesInput)) {
    carNames = carNamesInput;
  }

  return carNames;
};

export const getCarNames = e => {
  e.preventDefault();
  const carNamesInput = $('#car-names-input')
    .value.split(',')
    .filter(carName => carName.length > 0);

  return carNamesValidation(carNamesInput);
};
