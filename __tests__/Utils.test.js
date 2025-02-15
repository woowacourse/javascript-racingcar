import chooseRandomNumber from '../src/domain/utils/chooseRandomNumber.js';

describe('유틸함수를 테스트', () => {
  test.each([
    [
      { minNumber: 0, maxNumber: 9 },
      { minNumber: 0, maxNumber: 0 },
      { minNumber: 9, maxNumber: 9 },
    ],
  ])(
    '랜덤 숫자는 정해진 범위 내의 숫자만 반환한다.',
    ({ minNumber, maxNumber }) => {
      const randomNumber = chooseRandomNumber(minNumber, maxNumber);

      expect(randomNumber).toBeLessThanOrEqual(maxNumber);
      expect(randomNumber).toBeGreaterThanOrEqual(minNumber);
    },
  );
});
