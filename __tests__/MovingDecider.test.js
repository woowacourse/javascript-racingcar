const MovingDecider = require('../src/utils/MovingDecider');

describe('MovingDecider 테스트', () => {
  test.each([
    [
      [1, 4, 5],
      [false, true, true],
    ],
    [
      [1, 2, 3],
      [false, false, false],
    ],
    [
      [6, 7, 8],
      [true, true, true],
    ],
  ])('랜덤 숫자가 4 이상이면 true, 4 미만이면 false를 반환한다.', (testCase, expected) => {
    const mockGenerator = testCase.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn(),
    );

    const result = MovingDecider.decide(3, mockGenerator);
    expect(result).toStrictEqual(expected);
  });
});
