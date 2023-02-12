/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
import Validation from '../src/utils/Validation.js';

describe('Validation Test', () => {
  test.each([
    'ys,pobi,crong',
    'gabi,hoho',
    'jason,poco',
    '윤생😁😁😁,𩷶𩷶𩷶𩷶',
  ])('올바른 차이름 입력 시 true를 반환한다.', (carNames) => {
    expect(Validation.isValidCarNames(carNames.split(','))).toBeTruthy();
  });

  test.each([
    'gabriel,yunseong',
    '이윤성입니다,윤생',
    '우아한 배달이,치킨과피자',
  ])('잘못된 차이름 입력 시 false를 반환한다.', (carNames) => {
    expect(Validation.isValidCarNames(carNames.split(','))).toBeFalsy();
  });

  test.each([
    ['-1', false],
    ['0', false],
    ['5', true],
    ['34.55', false],
    ['10,000', false],
    ['string134', false],
    ['aa', false],
    ['13n', false],
    ['', false],
  ])('시도 횟수가 자연수 인가?(%s : %s)', (tryCount, expected) => {
    expect(Validation.isValidTryCount(+tryCount)).toBe(expected);
  });
});
