import ERROR_MESSAGE from '../src/error/message.js';
import TryCount from '../src/model/TryCount.js';

describe('tryCount 횟수 입력 테스트', () => {
  // 올바른 테스트
  test.each`
    testTitle                        | tryCount | expected
    ${'올바른 횟수가 들어온 경우 1'} | ${'1'}   | ${1}
    ${'올바른 횟수가 들어온 경우 2'} | ${'10'}  | ${10}
  `(
    '$testTitle테스트는 $tryCount이 입력되면 $expected 횟수를 출력한다.',
    ({ tryCount, expected }) => {
      expect(new TryCount(tryCount).getTryCount()).toEqual(expected);
    },
  );

  // 예외 테스트
  test.each`
    testTitle                           | tryCount  | expected
    ${'빈 칸이 들어온 경우'}            | ${''}     | ${ERROR_MESSAGE.tryCountEmpty}
    ${'공백이 들어온 경우'}             | ${' '}    | ${ERROR_MESSAGE.isNan}
    ${'숫자가 아닐 경우'}               | ${'$$%^'} | ${ERROR_MESSAGE.isNan}
    ${'1 ~ 10 사이의 숫자가 아닌 경우'} | ${'0'}    | ${ERROR_MESSAGE.tryCountRange}
    ${'1 ~ 10 사이의 숫자가 아닌 경우'} | ${'11'}   | ${ERROR_MESSAGE.tryCountRange}
  `(
    '$testTitle테스트는 $tryCount이 입력되면 $expected 에러를 던진다.',
    ({ tryCount, expected }) => {
      expect(() => new TryCount(tryCount)).toThrow(expected);
    },
  );
});