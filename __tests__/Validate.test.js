import Validate from '../src/Models/Validate.js';

export const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 이름 입력 검증 테스트', () => {
  test('자동차 이름 빈 값 오류 검증 테스트', () => {
    //then
    expect(() => Validate.checkIsEmpty('')).toThrow('[ERROR]');
  });

  test.each([['앵버앵버앵버', '상']])('자동차 이름 길이(1~5자) 오류 검증 테스트', (carName) => {
    //then
    expect(() => Validate.checkCarNameLength(carName)).toThrow('[ERROR]');
  });

  test('자동차 이름 중복 오류 검증 테스트', () => {
    // given
    const carNames = ['상추', '상추'];

    //then
    expect(() => Validate.checkCarNameDuplicate(carNames)).toThrow('[ERROR]');
  });

  test('최소 자동차 대수(2대) 미만 입력 검증 테스트', () => {
    // given
    const carNames = ['앵버'];

    // then
    expect(() => Validate.checkCarCount(carNames)).toThrow('[ERROR]');
  });
});

describe('시도 횟수 입력 검증 테스트', () => {
  test.each([[0, 22]])('시도 횟수 범위() 밖 입력 오류 검증 테스트', (tryCount) => {
    //then
    expect(() => Validate.checkTryCountRange(tryCount)).toThrow('[ERROR]');
  });

  test.each([['ㄱ', 3.4]])('자연수 입력 오류 검증 테스트', (tryCount) => {
    //then
    expect(() => Validate.checkIsInteger(tryCount)).toThrow('[ERROR]');
  });
});
