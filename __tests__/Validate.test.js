import Car from '../src/Models/Car.js';
import Race from '../src/Models/Race.js';

export const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 이름 입력 검증 테스트', () => {
  const FAIL_CASE = [[['재오상추앵버', '']], [['재오', '상추', '상추']], [['앵버']]];
  const SUCCESS_CASE = [[['재오', '상추', '앵버']], [['재', '상', '앵']]];

  test.each(SUCCESS_CASE)('자동차 이름 성공 테스트', (carNames) => {
    expect(() => carNames.forEach((name) => new Car(name, carNames))).not.toThrow('[ERROR]');
  });

  test.each(FAIL_CASE)('자동차 이름 실패 테스트', (carNames) => {
    // then
    expect(() => carNames.forEach((name) => new Car(name, carNames))).toThrow('[ERROR]');
  });
});

describe('시도 횟수 입력 검증 테스트', () => {
  const FAIL_CASE = ['50', '', '3.4'];
  const SUCCESS_CASE = ['15', '5'];
  test.each(SUCCESS_CASE)('시도 횟수 성공 테스트', (tryCount) => {
    // then
    expect(() => new Race(undefined, tryCount)).not.toThrow('[ERROR]');
  });

  test.each(FAIL_CASE)('시도 횟수 실패 테스트', (tryCount) => {
    // then
    expect(() => new Race(undefined, tryCount)).toThrow('[ERROR]');
  });
});
