const Random = require('../src/utils/Random');

const mockMathRandoms = (number) => {
  Math.random = jest.fn();

  return Math.random.mockReturnValueOnce(number);
};

describe('Random - 랜덤함수 테스트', () => {
  test('(무작위 숫자가 0.4미만의 숫자일 때 실패하는 경우)', () => {
    jest.useFakeTimers();
    mockMathRandoms(0.223);

    const result = Random.pickNumberInRange(0, 9);

    expect(result).toEqual(2);
  });
});
