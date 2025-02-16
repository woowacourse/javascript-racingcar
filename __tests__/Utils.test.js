import chooseRandomNumber from '../src/domain/utils/chooseRandomNumber.js';

describe('랜덤으로 특정 범위의 정수를 반환하는 chooseRandomNumber 유틸함수의 동작 테스트', () => {
  test.each([
    [
      { minNumber: 0, maxNumber: 9 },
      { minNumber: 0, maxNumber: 0 },
      { minNumber: 9, maxNumber: 9 },
    ],
  ])(
    'chooseRandomNumber 함수는 인자로 받은 범위 내의 숫자만 반환한다.',
    ({ minNumber, maxNumber }) => {
      const randomNumber = chooseRandomNumber(minNumber, maxNumber);

      expect(randomNumber).toBeLessThanOrEqual(maxNumber);
      expect(randomNumber).toBeGreaterThanOrEqual(minNumber);
    },
  );

  test('chooseRandomNumber 함수는 정수인 숫자만 반환한다.', () => {
    const MIN_NUMBER = 0;
    const MAX_NUMBER = 9;

    const randomNumber = chooseRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const isInteger = Number.isInteger(randomNumber);

    expect(isInteger).toBe(true);
  });
});
