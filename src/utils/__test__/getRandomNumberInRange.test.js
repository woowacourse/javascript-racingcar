import getRandomNumberInRange from '../getRandomNumberInRange.js';

const rangeCheckCase = [
  [0, 9],
  [1, 1],
  [-1.123123123, -1.123123123],
  [-Infinity, 0],
  [-Infinity, -Infinity],
  [0, Infinity],
  [Infinity, Infinity],
];
const typeCheckCase = [
  ['1', '1'],
  [BigInt(10), BigInt(123)],
  [null, null],
  [undefined, undefined],
  [Symbol(), Symbol()],
  [true, false],
  [{}, {}],
  [[], []],
];

const lowerAndUpperCheckCase = [9, 0];

describe('utils: getRandomNumberInRange 검증', () => {
  test.skip.each(rangeCheckCase)(
    '범위 내 숫자 나오는지 1만회 검증',
    //Arrange
    (lower, upper) => {
      const maxCount = 10_000;
      for (let count = 0; count < maxCount; count++) {
        //Act
        const result = getRandomNumberInRange(lower, upper);
        //Assert
        expect(result).not.toBeNaN();
        expect(result).toBeGreaterThanOrEqual(lower);
        expect(result).toBeLessThanOrEqual(upper);
      }
    }
  );
  describe('예외 검증', () => {
    test('대소 검증', () => {
      // Arrange
      const [lower, upper] = lowerAndUpperCheckCase;
      //Assert
      expect(
        //Act
        () => getRandomNumberInRange(lower, upper)
      ).toThrow();
    });

    test.each(typeCheckCase)(
      '타입 검증',
      //Arrange
      (lower, upper) => {
        //Assert
        expect(
          //Act
          () => getRandomNumberInRange(lower, upper)
        ).toThrow();
      }
    );
  });
});
