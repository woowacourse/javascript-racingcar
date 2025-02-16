import Validator from '../src/domain/validator/Validator';

test('자동차 이름은 1자 이상 5자 이하가 아니면 에러를 띄운다.', () => {
  const carName = 'exceptqwer';

  expect(() => Validator.checkCarNameLength(carName)).toThrow('[ERROR]');
});

test('자동차 이름에 공백이 들어가면 에러를 띄운다', () => {
  const carName = 'po bi';

  expect(() => Validator.checkBlank(carName)).toThrow('[ERROR]');
});

test('자동차 이름이 중복되면 에러를 띄운다.', () => {
  const carNames = ['pobi', 'pobi', 'jun'];

  expect(() => Validator.checkDuplicatedCarName(carNames)).toThrow('[ERROR]');
});
