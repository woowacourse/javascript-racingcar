const { RACE_ERROR_MESSAGE } = require('../src/Constant/ErrorMessage');
const CarRaceValidator = require('../src/Models/CarRaceValidator');

describe('CarRaceValidator 테스트', () => {
  test.each([[['garam'], [''], ['garam', 'garam']]])(
    '자동차 이름이 한개 이하거나 중복될 경우 예외처리한다.',
    input => {
      expect(() => {
        CarRaceValidator.validateNamesOfCars(input);
      }).toThrow(RACE_ERROR_MESSAGE.numberOfNames);
    },
  );

  test.each([['yeopto'], ['garame']])(
    '이름이 5자를 초과하는 경우 예외처리한다.',
    input => {
      expect(() => {
        CarRaceValidator.validateCarName(input);
      }).toThrow(RACE_ERROR_MESSAGE.lengthOfName);
    },
  );

  test.each([[0], [-1]])('시도 횟수가 1이상이 아니면 예외처리한다', input => {
    expect(() => {
      CarRaceValidator.validateTryCount(input);
    }).toThrow(RACE_ERROR_MESSAGE.rangeOfTryCount);
  });

  test.each([['aa'], [' '], ['한']])(
    '시도 횟수가 숫자가 아니면 예외처리한다',
    input => {
      expect(() => {
        CarRaceValidator.validateTryCount(input);
      }).toThrow(RACE_ERROR_MESSAGE.rangeOfTryCount);
    },
  );
});
