import { $ } from '../util/dom.js';

const errorController = ({ isError, message }) => {
  if (isError) {
    window.alert(message);
  }
};

const isCorrectCarNamesInputCount = carNamesInput => {
  const isSuccess = carNamesInput.length >= 2;

  errorController({
    isError: !isSuccess,
    message: '자동차 이름을 2개 이상 입력하세요',
  });

  return isSuccess;
};

const isCorrectCarNameLength = carNamesInput => {
  const isSuccess =
    carNamesInput.filter(carName => carName.length > 5).length === 0;

  errorController({
    isError: !isSuccess,
    message: '자동차 이름은 5자를 초과할 수 없습니다.',
  });

  return isSuccess;
};

const isUniqCarNames = carNamesInput => {
  const isSuccess = carNamesInput.length === new Set(carNamesInput).size;

  errorController({
    isError: !isSuccess,
    message: '자동차 이름은 중복 될 수 없습니다.',
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
