import ERROR_MESSAGE from '../src/error/message.js';
import Cars from '../src/model/Cars.js';

// Cars validate 메소드 테스트
describe('Cars 이름 문자열 테스트', () => {
  // 예외 테스트
  test.each`
    testTitle                      | carNames              | expected
    ${'빈 칸이 들어온 경우'}       | ${''}                 | ${ERROR_MESSAGE.nameLength}
    ${'중복된 이름이 들어온 경우'} | ${'pobi,pobi,  pobi'} | ${ERROR_MESSAGE.duplicated}
  `(
    '$testTitle테스트는 $carNames이 입력되면 $expected 에러를 던진다.',
    ({ carNames, expected }) => {
      expect(() => new Cars(carNames)).toThrow(expected);
    },
  );
});
