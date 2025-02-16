import { ERROR } from '../src/constants/messages.js';
import {
  carNameValidator,
  checkDuplicatedCarName,
} from '../src/validator/CarNameValidator.js';

test.each([['exceptqwer'], ['']])(
  'checkCarNameLength함수는 자동차 이름이 1자 이상 5자 이하가 아니면 에러를 띄운다.',
  (carName) => {
    expect(() => carNameValidator(carName)).toThrow(ERROR.CAR_NAME_LENGTH);
  }
);

test('checkBlank함수는 자동차 이름에 공백이 들어가면 에러를 띄운다', () => {
  const carName = 'po bi';

  expect(() => carNameValidator(carName)).toThrow(ERROR.BLANK);
});

test('checkDuplicatedCarName함수는 자동차 이름이 중복되면 에러를 띄운다.', () => {
  const carNames = ['pobi', 'pobi', 'jun'];

  expect(() => checkDuplicatedCarName(carNames)).toThrow(
    ERROR.DUPLICATED_CAR_NAME
  );
});
