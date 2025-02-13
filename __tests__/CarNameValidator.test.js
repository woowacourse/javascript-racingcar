import CarNameValidator from '../src/validator/CarNameValidator';

test('자동차 이름은 1자 이상 5자 이하가 아니면 에러를 띄운다.', () => {
  // given
  const carName = 'exceptqwer';

  // then

  expect(() => CarNameValidator.checkCarNameLength(carName)).toThrow('[ERROR]');
});
