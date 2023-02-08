const { isValidCarNames, isValidTryCount } = require('../src/utils/Validation');

describe('Validation Test', () => {
  test('이름이 1~5자 인가?', () => {
    //given
    const names = ['yunseong', 'gabriel'];
    //when
    expect(isValidCarNames(names)).toBeFalsy();
    //then
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
