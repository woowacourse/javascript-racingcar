import InputValidator from '../src/utils/InputValidator.js';
import { ERROR_MESSAGE } from '../src/constants/systemMessages.js';

describe('경주에 참여하는 자동차의 이름들을 검증한다.', () => {
  test('자동차 이름에 중복이 있으면 안된다.', () => {
    const carNames = ['a', 'b', 'a'];

    expect(() => {
      InputValidator.carNames(carNames);
    }).toThrow(ERROR_MESSAGE.DUPLICATE_NAME);
  });

  test('자동차 이름이 5자 이상이면 안된다.', () => {
    const carNames = ['a', 'b', 'cdefgd'];

    expect(() => {
      InputValidator.carNames(carNames);
    }).toThrow(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  });

  test('자동차 이름 중 공백이 있으면 안된다.', () => {
    const carNames = ['a', 'b b', 'c'];

    expect(() => {
      InputValidator.carNames(carNames);
    }).toThrow(ERROR_MESSAGE.INVALID_NAME_SPACE);
  });

  test('자동차 이름은 알파벳으로 구성되어야 한다.', () => {
    const carNames = ['a', 'b', 'c1'];

    expect(() => {
      InputValidator.carNames(carNames);
    }).toThrow(ERROR_MESSAGE.INVALID_NAME_CHARACTER);
  });

  test('자동차는 두 대 이상이어야 한다.', () => {
    const carNames = ['a'];

    expect(() => {
      InputValidator.carNames(carNames);
    }).toThrow(ERROR_MESSAGE.INVALID_CAR_COUNT);
  });

  test('자동차 입력을 정상적으로 입력한 경우 에러를 내지 않는다.', () => {
    const carNames = ['asdf', 'qwer'];

    expect(() => {
      InputValidator.carNames(carNames);
    }).not.toThrow();
  });
});

describe('경주를 진행할 횟수를 검증한다.', () => {
  test('횟수는 문자를 입력받으면 안된다.', () => {
    const count = 'a';
    expect(() => {
      InputValidator.count(count);
    }).toThrow(ERROR_MESSAGE.INVALID_COUNT_CHARACTER);
  });

  test('횟수는 공백을 입력받으면 안된다.', () => {
    const count = '1 2';
    expect(() => {
      InputValidator.count(count);
    }).toThrow(ERROR_MESSAGE.INVALID_COUNT_SPACE);
  });

  test('횟수가 1보다 작으면 안된다.', () => {
    const count = '0';
    expect(() => {
      InputValidator.count(count);
    }).toThrow(ERROR_MESSAGE.INVALID_COUNT_MIN);
  });

  test('횟수는 최대 1000이다.', () => {
    const count = '1001';
    expect(() => {
      InputValidator.count(count);
    }).toThrow(ERROR_MESSAGE.INVALID_COUNT_MAX);
  });

  test('정상 입력', () => {
    const count = '12';
    expect(() => {
      InputValidator.count(count);
    }).not.toThrow();
  });
});
