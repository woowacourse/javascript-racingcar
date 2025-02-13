import {
  validateGameCountType,
  validateGameCountRange,
} from '../../src/Validation/gameCount.js';

describe('시도 횟수 유효성 검사', () => {
  test.each([
    ['    ', '[Error]'],
    ['', '[Error]'],
    [0.1, '[Error]'],
    ['abc', '[Error]'],
    [NaN, '[Error]'],
    [Infinity, '[Error]'],
  ])('시도 횟수 타입', (input, errorMessage) => {
    expect(() => {
      validateGameCountType(input);
    }).toThrow(errorMessage);
  });

  test.each([
    [0, '[Error]'],
    [100, '[Error]'],
  ])('시도 횟수 범위', (input, errorMessage) => {
    expect(() => {
      validateGameCountRange(input);
    }).toThrow(errorMessage);
  });
});
