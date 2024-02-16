import Car from '../src/domains/Car';
import pickNumberInRange from '../src/utils/pickNumberInRange';

jest.mock('../src/utils/pickNumberInRange', () => {
  return jest.fn();
});

const mockRandoms = (numbers) => {
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, pickNumberInRange);
};

describe('자동차 도메인 테스트', () => {
  let harryCar;

  beforeEach(() => {
    harryCar = new Car('harry');
  });

  it('숫자가 4이상인 경우에 자동차는 전진해야한다.', () => {
    // given
    mockRandoms([4, 6]);
    const expectedPosition = 2;

    // when
    harryCar.move();
    harryCar.move();

    // then
    expect(harryCar.position).toBe(expectedPosition);
  });

  it('숫자가 4미만인 경우 자동차는 전진할 수 없다.', () => {
    // given
    mockRandoms([1, 3]);
    const expectedPosition = 0;

    // when
    harryCar.move();
    harryCar.move();

    // then
    expect(harryCar.position).toBe(expectedPosition);
  });
});
