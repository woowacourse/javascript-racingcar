/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
const { isValidCarNames, isValidTryCount } = require('../src/utils/Validation');

describe('Validation Test', () => {
  test.each([
    [['yunseong', 'gabriel'], false],
    [['aa', 'bb', 'cc'], true],
    [['aa', 'bb', ''], false],
  ])('이름 유효성 검사(%s: %s)', (names, expected) => {
    expect(isValidCarNames(names)).toBe(expected);
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
    expect(isValidTryCount(+tryCount)).toBe(expected);
  });
});
