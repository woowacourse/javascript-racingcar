import { Car, RandomNumber } from '../src/domain';

describe('랜던 숫자 테스트', () => {
  test('지정한 랜덤 숫자의 범위안에서 무작위로 하나의 정수를 반환', () => {
    const rangeArray = [
      { start: 0, end: 9 },
      { start: 19, end: 10 },
    ];

    rangeArray.forEach((range) => {
      const { start, end } = range;

      const randomNumber = RandomNumber.pickNumberInRange(start, end);

      const isInRange =
        randomNumber >= Math.min(start, end) &&
        randomNumber <= Math.max(start, end);
      const isInteger = Number.isInteger(randomNumber);

      expect(isInRange && isInteger).toBeTruthy();
    });
  });
  test('경주에 참여하는 자동차가 뽑는 랜덤 숫자는 0에서 9사이의 정수 하나', () => {
    const randomNumber = new Car('test').getRandomNumber();

    expect(/^[0-9]$/.test(randomNumber)).toBeTruthy();
  });
});
