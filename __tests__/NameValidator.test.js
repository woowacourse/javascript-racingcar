import NameValidator from '../src/utils/validator/NameValidator.js';
import ErrorMessage from '../src/constants/ErrorMessage.js';

describe('자동차 이름의 예외 상황 테스트', () => {
  test(`자동차 이름이 빈 값이면 ${ErrorMessage.isEmpty} 메시지를 포함한 에러를 throw 한다.`, () => {
    const CAR_NAME = '';

    expect(() => NameValidator.isNotEmpty(CAR_NAME)).toThrow(
      ErrorMessage.isEmpty,
    );
  });

  test(`자동차가 2대 미만이면 ${ErrorMessage.isLessThanTwo} 메시지를 포함한 에러를 throw 한다.`, () => {
    const CAR_NAMES = ['jenna'];

    expect(() => NameValidator.isMoreThanTwo(CAR_NAMES)).toThrow(
      ErrorMessage.isLessThanTwo,
    );
  });

  test(`자동차 이름이 5자를 초과하면 ${ErrorMessage.isLongerThanFive} 메시지를 포함한 에러를 throw 한다.`, () => {
    const CAR_NAMES = ['jenna', 'mato', 'gongwon'];

    expect(() => NameValidator.isBelowFive(CAR_NAMES)).toThrow(
      ErrorMessage.isLongerThanFive,
    );
  });

  test(`자동차 이름이 중복되면 ${ErrorMessage.isDuplicated} 메시지를 포함한 에러를 throw 한다.`, () => {
    const CAR_NAMES = ['jenna', 'jenna', 'mato'];

    expect(() => NameValidator.isNotDuplicated(CAR_NAMES)).toThrow(
      ErrorMessage.isDuplicated,
    );
  });
});
