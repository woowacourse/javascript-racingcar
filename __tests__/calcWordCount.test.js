import calcWordCount from '../src/utils/calcWordCount';

/* eslint-disable no-undef */
describe('calcWordCount', () => {
  test.each([
    ['test', 4],
    ['yunsang', 7],
    ['윤생😁', 3],
  ])('문자열이 들어오면 그 문자열의 글자 수를 반환한다.', (text, expected) => {
    expect(calcWordCount(text)).toBe(expected);
  });
});
