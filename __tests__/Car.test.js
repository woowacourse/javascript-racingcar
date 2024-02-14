import { Car } from '../src/models/index.js';
import { getRandomNumber } from '../src/utils/index.js';

describe('자동차 테스트', () => {
  test('0~9까지의 랜덤한 정수값 가져오기', () => {
    const number = getRandomNumber();
    const numberArray = Array.from({ length: 10 }, (value, index) => index);

    expect(numberArray.includes(number));
  });

  test('랜덤 숫자가 4이상 일때 전진 ', () => {
    [undefined, 3, 4, 5].forEach((number) => {
      const car = new Car('car', 0, number);

      const { step } = car.getCarInfo();
      const pass = number
        ? number >= 4
          ? step === 1
          : step === 0
        : step === 0;

      expect(pass).toBeTruthy();
    });
  });
});
