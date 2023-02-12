const Validator = require('../src/utils/Validator.js');
const { ERROR_MESSAGE } = require('../src/constants/validation');

describe('자동차 이름을 위한 입력값의 유효성 검사', () => {
  test.each([['!@#'], ['pobi.crong.honux'], ['포비,크롱,호눅스!']])(
    '영어, 한글, 쉼표(,) 이외의 문자가 포함된 경우 예외 처리',
    (input) => {
      expect(() => Validator.validateNameInput(input)).toThrow(
        ERROR_MESSAGE.INVALID_CHARACTER,
      );
    },
  );

  test('유효한 자동차 이름 길이가 아닌 경우 예외 처리', () => {
    const carNamesInput = 'pobi,crongg,honux';

    expect(() => Validator.validateNameInput(carNamesInput)).toThrow(
      ERROR_MESSAGE.INVALID_NAME_LENGTH,
    );
  });
});

describe('시도할 횟수를 위한 입력값의 유효성 검사', () => {
  test.each([['0'], ['-1'], ['abcd'], ['a0'], ['0a']])(
    '입력값이 양의 정수가 아닌 경우 예외 처리',
    (input) => {
      expect(() => Validator.validateTryCountsInput(input)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT,
      );
    },
  );
});
