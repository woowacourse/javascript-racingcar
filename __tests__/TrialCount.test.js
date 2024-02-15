import TrialCount from '../src/entities/TrialCount';

describe('시도 횟수', () => {
  test.each(['5', '1', '3 '])('정상 입력', countStr => {
    // Arrange
    const trialCount = new TrialCount(countStr);

    // Act
    const result = trialCount.getCount();

    // Assert
    expect(result).toBe(parseInt(countStr));
  });

  test.each(['', '  '])('공백 입력', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });
  test.each(['a', '_3'])('숫자형이어야 함', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });
  test.each(['-1', '0'])('1이상의 수여야 함', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });
  test.each(['5.0', '3.3'])('정수여야 함', countStr => {
    expect(() => new TrialCount(countStr)).toThrow('[ERROR]');
  });
});
