import TrialCount from '../src/domain/entities/TrialCount.js';

describe('시도 횟수 테스트', () => {
  test.each(['5', '1', '3 '])('정상 입력', countStr => {
    // Arrange
    const trialCount = new TrialCount(countStr);

    // Act
    const result = trialCount.getCount();

    // Assert
    expect(result).toBe(parseInt(countStr));
  });

  test.each(['', '  '])('공백일 경우 에러를 발생시킨다', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });

  test.each(['a', '_3'])('숫자형이 아닌 경우 에러를 발생시킨다', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });

  test.each(['-1', '0'])('0 이하의 수인 경우 에러를 발생시킨다', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });

  test.each(['5.0', '3.3'])('정수가 아닌 경우 에러를 발생시킨다', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });
});
