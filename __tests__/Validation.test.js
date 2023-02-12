const RACE_ERROR_MESSAGE = require('../src/Constant/ErrorMessage');
const Cars = require('../src/Models/Cars');
const Car = require('../src/Models/Car');
const TryCount = require('../src/Models/TryCount');

describe('유효성 검사 테스트', () => {
  test.each([[['garam'], [''], ['garam', 'garam']]])(
    '자동차 이름이 한개 이하거나 중복될 경우 예외처리한다.',
    input => {
      expect(() => {
        new Cars(input);
      }).toThrow(RACE_ERROR_MESSAGE.numberOfCars);
    },
  );

  test.each([['yeopto'], ['garame']])('이름이 5자를 초과하는 경우 예외처리한다.', input => {
    expect(() => {
      new Car(input);
    }).toThrow(RACE_ERROR_MESSAGE.lengthOfName);
  });

  test.each([[' '], ['!'], [''], ['123']])(
    '자동차 이름이 문자이거나 숫자만 들어간 경우 경우 예외처리한다.',
    input => {
      expect(() => {
        new Car(input);
      }).toThrow(RACE_ERROR_MESSAGE.invalidInput);
    },
  );

  test.each([[0], [-1]])('시도 횟수가 1이상이 아니면 예외처리한다', input => {
    expect(() => {
      new TryCount(input);
    }).toThrow(RACE_ERROR_MESSAGE.rangeOfTryCount);
  });

  test.each([['aa'], [' '], ['한']])('숫자가 아니라면 예외처리를 한다', input => {
    expect(() => {
      new TryCount(input);
    }).toThrow(RACE_ERROR_MESSAGE.rangeOfTryCount);
  });
});
