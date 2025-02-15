import Car from '../src/Models/Car.js';
import Race from '../src/Models/Race.js';
import ValidateModule from '../src/validates/ValidatorModule.js';

export const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 이름 입력 검증 테스트', () => {
  const FAIL_CASE = ['재오상추앵버', '', '재오,상추,상추', '앵버'];
  const SUCCESS_CASE = ['재오,상추,앵버', '재,상,앵'];
  test.each(SUCCESS_CASE)('자동차 이름 성공 테스트', (carNames) => {
    // when
    const race = new Race(carNames.split(','), 3);

    // then
    expect(race.cars).toEqual(carNames.split(',').map((carName) => new Car(carName)));
  });

  test.each(FAIL_CASE)('자동차 이름 실패 테스트', (carNames) => {
    // when

    // then
    expect(() => new Race(carNames.split(','), 3)).toThrow('[ERROR]');
  });
});

describe('시도 횟수 입력 검증 테스트', () => {
  const FAIL_CASE = ['21', '0', '', '3.4'];
  const SUCCESS_CASE = ['20', '1'];
  test.each(SUCCESS_CASE)('시도 횟수 성공 테스트', (tryCount) => {
    // when

    // then
    expect(() => ValidateModule.validateTryCountInput(tryCount)).not.toThrow('[ERROR]');
  });

  test.each(FAIL_CASE)('시도 횟수 실패 테스트', (tryCount) => {
    // when

    // then
    expect(() => ValidateModule.validateTryCountInput(tryCount)).toThrow('[ERROR]');
  });
});
