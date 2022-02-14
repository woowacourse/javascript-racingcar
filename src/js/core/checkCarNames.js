import { $ } from '../util/dom.js';

export const getCarNames = e => {
  e.preventDefault();
  const carNames = $('#car-names-input')
    .value.split(',')
    .filter(carName => carName.length > 0);

  if (!checkCarNames(carNames)) {
    return carNames;
  }
};

const checkCarNames = carNames => {
  return (
    isUnderMinCarNamesLength(carNames) ||
    isOverMaxCarNameLength(carNames) ||
    isOverlapCarNames(carNames)
  );
};

const isOverMaxCarNameLength = carNames => {
  let wrongCarNames = carNames.filter(carName => carName.length > 5);
  if (wrongCarNames.length > 0) {
    window.alert('자동차 이름은 5자를 초과할 수 없습니다.');
  }
  return wrongCarNames.length > 0;
};

const isUnderMinCarNamesLength = carNames => {
  if (carNames.length < 2) {
    window.alert('자동차 이름을 2개 이상 입력하세요');
  }
  return carNames.length < 2;
};

const isOverlapCarNames = carNames => {
  if (carNames.length !== new Set(carNames).size) {
    window.alert('자동차 이름은 중복 될 수 없습니다.');
  }
  return carNames.length !== new Set(carNames).size;
};
