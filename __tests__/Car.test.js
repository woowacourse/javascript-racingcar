import Car from '../src/models/Car';
import Validator from '../src/utils/Validator';

describe('Model 테스트', () => {
  test('거리가 1일 때 2번 움직이면 3이 된다.', () => {
    const car = new Car('car');

    car.move();
    car.move();

    expect(car.getDistance()).toBe(3);
  });
});

describe('utils 테스트', () => {
  describe('Validator 테스트', () => {
    test('입력값에 공백이 있으면 에러가 발생한다.', () => {
      expect(() => Validator.checkBlank('a, b, c')).toThrow();
    });

    test('이름들을 입력할 때 마지막이 쉼표면 에러가 발생한다.', () => {
      expect(() => Validator.checkLastComma('a,b,c,')).toThrow();
    });

    test('이름의 길이가 0이면 에러가 발생한다.', () => {
      expect(() => Validator.checkNameLength('a,b,c,')).toThrow();
    });

    test('중복된 이름이 있으면 에러가 발생한다.', () => {
      expect(() => Validator.checkDuplicate('a,a')).toThrow();
    });

    test('정수가 아니면 에러가 발생한다.', () => {
      expect(() => Validator.checkIntegerNumber('5.0')).toThrow();
    });
  });
});
