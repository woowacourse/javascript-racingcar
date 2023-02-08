const { isValidCarNames } = require('../src/utils/Validation');

describe('Validation Test', () => {
  test('이름이 1~5자 인가?', () => {
    //given
    const names = ['yunseong', 'gabriel'];
    //when
    expect(isValidCarNames(names)).toBeFalsy();
    //then
  });
});
