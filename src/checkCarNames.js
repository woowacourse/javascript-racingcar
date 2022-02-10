import { $ } from './util/dom.js';

export const getCarNames = e => {
  e.preventDefault();
  const carNamesInput = $('#car-names-input')
    .value.split(',')
    .filter(carName => carName.length > 0);

  if (!checkCarNames(carNamesInput)) {
    return carNamesInput;
  }
};

export const checkCarNames = carNamesInput => {
  if (
    isCorrectCarNamesInputLength(carNamesInput) ||
    isMaxCarNameLength(carNamesInput) ||
    isSameCarName(carNamesInput)
  ) {
    return true;
  }
};

const isMaxCarNameLength = carNamesInput => {
  let wrongCarNames = carNamesInput.filter(carName => carName.length > 5);
  if (wrongCarNames.length) {
    window.alert('자동차 이름은 5자를 초과할 수 없습니다.');
  }
  return wrongCarNames.length;
};

const isCorrectCarNamesInputLength = carNamesInput => {
  if (carNamesInput.length < 2) {
    window.alert('자동차 이름을 2개 이상 입력하세요');
  }
  return carNamesInput.length < 2;
};

const isSameCarName = carNamesInput => {
  if (carNamesInput.length !== new Set(carNamesInput).size) {
    window.alert('자동차 이름은 중복 될 수 없습니다.');
  }
  return carNamesInput.length !== new Set(carNamesInput).size;
};
