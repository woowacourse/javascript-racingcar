import { RandomNumber } from '../src/utils';

describe('랜던 숫자에 대한 테스트', () => {
  test('0에서 9사이의 정수 중 하나의 숫자를 반환', () => {
    const randomNumber = RandomNumber.pickNumber();

    expect(/^[0-9]$/.test(randomNumber)).toBeTruthy();
  });
});
