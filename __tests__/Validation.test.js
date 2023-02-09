const { isValidCarNames, isValidTryCount } = require('../src/utils/Validation');

describe('Validation Test', () => {
  test.each([
    [['yunseong', 'gabriel'], false],
    [['aa', 'bb', 'cc'], true],
    [['aa', 'bb', ''], false],
    // [['aa', 'bb', '윤생이😁😁'], true], => 고민할 부분(서로게이트 쌍)
  ])('이름 유효성 검사(%s: %s)', (names, expected) => {
    expect(isValidCarNames(names)).toBe(expected);
  });

  test('시도 횟수가 자연수인가?', () => {
    const tryCount = '-1';
    const tryCount2 = '0';
    const tryCount3 = 'dfgh34';
    const tryCount4 = '5';

    expect(isValidTryCount(tryCount)).toBeFalsy();
    expect(isValidTryCount(tryCount2)).toBeFalsy();
    expect(isValidTryCount(tryCount3)).toBeFalsy();
    expect(isValidTryCount(tryCount4)).toBeTruthy();
  });
});
