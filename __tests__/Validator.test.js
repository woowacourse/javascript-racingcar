const { RACE_ERROR_MESSAGE } = require('../src/Constant/ErrorMessage');
const Validator = require('../src/Utils/Validator');

describe('Validator 테스트', () => {
  test.each([[['garam'], [''], ['garam', 'garam']]])(
    '자동차 이름이 한개 이하거나 중복될 경우 예외처리한다.',
    input => {
      expect(() => {
        Validator.validateNamesOfCars(input);
      }).toThrow(RACE_ERROR_MESSAGE.numberOfNames);
    },
  );

  test.each([['yeopto'], ['garame']])(
    '이름이 5자를 초과하는 경우 예외처리한다.',
    input => {
      expect(() => {
        Validator.validateCarName(input);
      }).toThrow(RACE_ERROR_MESSAGE.lengthOfName);
    },
  );

  test.each([[' '], ['!'], [''], ['123']])(
    '자동차 이름이 문자이거나 숫자만 들어간 경우 경우 예외처리한다.',
    input => {
      expect(() => {
        Validator.validateCarName(input);
      }).toThrow(RACE_ERROR_MESSAGE.invalidInput);
    },
  );

  test.each([[0], [-1]])('시도 횟수가 1이상이 아니면 예외처리한다', input => {
    expect(() => {
      Validator.validateTryCount(input);
    }).toThrow(RACE_ERROR_MESSAGE.rangeOfTryCount);
  });

  test.each([['aa'], [' '], ['한']])(
    '숫자가 아니라면 예외처리를 한다',
    input => {
      expect(() => {
        Validator.validateTryCount(input);
      }).toThrow(RACE_ERROR_MESSAGE.rangeOfTryCount);
    },
  );
});
