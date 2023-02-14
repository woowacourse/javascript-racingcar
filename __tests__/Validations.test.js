const Validations = require('../src/utils/Validations');

describe('input의 유효성검사에 대한 단위 테스트', () => {
  test('차 이름의 길이가 5이상이면 false를 반환하는 함수 테스트', () => {
    const carNames = ['nave', 'naveowo'];
    expect(Validations.isCarNameUnderMax(carNames)).toBeFalsy();
  });

  test('차 이름이 1자 미만이면 false를 반환하는 함수 테스트', () => {
    const carNames = ['naveowo', 'nave', ''];
    expect(Validations.isCarNameOverMin(carNames)).toBeFalsy();
  });

  test('라운드가 0이면 false를 반환하는 함수 테스트', () => {
    const roundNum = 0;
    expect(Validations.isCorrectRoundNumber(roundNum)).toBeFalsy();
  });

  test('라운드가 음수이면 false를 반환하는 함수 테스트', () => {
    const roundNum = -1;
    expect(Validations.isCorrectRoundNumber(roundNum)).toBeFalsy();
  });
});
