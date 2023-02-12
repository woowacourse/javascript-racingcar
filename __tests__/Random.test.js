const { Random } = require('../src/utils');

const mockMathRandoms = (number) => {
  Math.random = jest.fn();

  return Math.random.mockReturnValueOnce(number);
};

describe('Random - 랜덤함수 테스트', () => {
  test('(실패 경우)', () => {
    jest.useFakeTimers();
    mockMathRandoms(0.223);

    const result = Random.pickNumberInRange(0, 9);

    expect(result).toEqual(2);
  });
});
