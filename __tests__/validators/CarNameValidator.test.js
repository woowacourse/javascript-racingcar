import { ERROR } from '../../src/constants/message.js';
import CarNameValidator from '../../src/validators/CarNameValidator.js';

describe('자동차 이름 유효성 클래스 테스트', () => {
  const carNameValidator = new CarNameValidator();

  describe('정상 케이스', () => {
    test('자동차 이름의 길이는 1이상 5이하 이다.', () => {
      const carNames = ['일', '화성', '토성이', '목성목성', '금성금성금'];
      expect(() => carNameValidator.validateNames(carNames)).not.toThrow();
    });

    test('모든 자동차 이름이 중복되지 않아야 한다.', () => {
      const carNames = ['화성이', '토성이', '목성이'];
      expect(() => carNameValidator.validateNames(carNames)).not.toThrow();
    });

    test('일반 문자와 함께 사용된 특수 문자는 사용 가능하다.', () => {
      const carNames = ['화성~~', '토성2', '목성_!'];
      expect(() => carNameValidator.validateNames(carNames)).not.toThrow();
    });
  });

  describe('예외 케이스', () => {
    test('1글자 미만의 자동차 이름이 포함되어 있으면 에러가 발생한다.', () => {
      const carNames = ['', '화성', '토성이', '목성목성'];
      expect(() => carNameValidator.validateNames(carNames)).toThrow(ERROR.CAR_NAME.LENGTH);
    });

    test('5글자를 초과하는 자동차 이름이 포함되어 있으면 에러가 발생한다.', () => {
      const carNames = ['화성', '토성이', '목성목성', '금성금성금성'];
      expect(() => carNameValidator.validateNames(carNames)).toThrow(ERROR.CAR_NAME.LENGTH);
    });

    test('중복된 이름이 포함된 경우 에러가 발생한다.', () => {
      const duplicateNames = ['화성이', '토성이', '화성이'];
      expect(() => carNameValidator.validateNames(duplicateNames)).toThrow(ERROR.CAR_NAME.DUPLICATE);
    });

    test('특수 문자로만 구성된 이름이 포함된 경우 에러가 발생한다.', () => {
      const namesWithSpecialChars = ['화성이', '@', '토성이'];
      expect(() => carNameValidator.validateNames(namesWithSpecialChars)).toThrow(ERROR.CAR_NAME.SPECIAL_SYMBOL);
    });

    test('자동차가 1대 이하인 경우 에러가 발생한다.', () => {
      const car = ['행성이'];
      expect(() => carNameValidator.validateNames(car)).toThrow(ERROR.CAR.INVALID_COUNT);
    });

    test('자동차가 100대를 초과하는 경우 에러가 발생한다.', () => {
      const cars = Array.from({ length: 101 }, (_, i) => `${i}`);
      expect(() => carNameValidator.validateNames(cars)).toThrow(ERROR.CAR.INVALID_COUNT);
    });
  });
});
