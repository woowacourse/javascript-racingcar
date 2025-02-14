import CarNameValidator from '../src/validator/CarNameValidator.js';

test('자동차 이름은 1자 이상 5자 이하가 아니면 에러를 띄운다.', () => {
  const carName = 'exceptqwer';

  expect(() => CarNameValidator.checkCarNameLength(carName)).toThrow('[ERROR]');
});

test('자동차 이름에 공백이 들어가면 에러를 띄운다', () => {
  const carName = 'po bi';

  expect(() => CarNameValidator.checkBlank(carName)).toThrow('[ERROR]');
});

test('자동차 이름이 중복되면 에러를 띄운다.', () => {
  const carNames = ['pobi', 'pobi', 'jun'];

  expect(() => CarNameValidator.checkDuplicatedCarName(carNames)).toThrow('[ERROR]');
});
