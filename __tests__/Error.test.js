const Constants = require('../src/Constants');
const App = require('../src/domain/App');

describe('input의 유효성검사에 대한 단위 테스트', () => {
  const app = new App();
  test('차 이름의 길이가 5이상이면 에러를 반환하는 함수 테스트', () => {
    const carNames = ['nave', 'naveowo'];
    expect(() => app.validateCarInput(carNames)).toThrow(Constants.ERROR_CAR_LENGTH);
  });

  test('차 이름의 길이가 1미만이면 에러를 반환하는 함수 테스트', () => {
    const carNames = ['nave', ''];
    expect(() => app.validateCarInput(carNames)).toThrow(Constants.ERROR_CAR_NONAME);
  });

  test('라운드가 0이면 에러를 반환하는 함수 테스트', () => {
    const roundNum = 0;
    expect(() => app.validateRoundInput(roundNum)).toThrow(Constants.ERROR_ROUND);
  });
});
