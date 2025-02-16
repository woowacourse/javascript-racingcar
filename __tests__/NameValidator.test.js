import NameValidator from '../src/utils/validator/NameValidator.js';
import ERROR_MESSAGE from '../src/constants/ERROR_MESSAGE.js';

test('자동차 이름이 빈 값이면 에러 처리한다.', () => {
  const CAR_NAME = '';

  expect(() => NameValidator.isNotEmpty(CAR_NAME)).toThrow(
    ERROR_MESSAGE.isEmpty,
  );
});

test('자동차가 두 대 미만이면 에러 처리한다.', () => {
  const CAR_NAMES = ['jenna'];

  expect(() => NameValidator.isMoreThanTwo(CAR_NAMES)).toThrow(
    ERROR_MESSAGE.isLessThanTwo,
  );
});

test('자동차 이름이 5자 이상이면 에러 처리한다.', () => {
  const CAR_NAMES = ['jenna', 'mato', 'gongwon'];

  expect(() => NameValidator.isBelowFive(CAR_NAMES)).toThrow(
    ERROR_MESSAGE.isLongerThanFive,
  );
});

test('자동차 이름은 중복될 수 없다.', () => {
  const CAR_NAMES = ['jenna', 'jenna', 'mato'];

  expect(() => NameValidator.isNotDuplicated(CAR_NAMES)).toThrow(
    ERROR_MESSAGE.isDuplicated,
  );
});
