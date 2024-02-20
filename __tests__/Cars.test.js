import ERROR_MESSAGE from "../src/error/message.js";
import Cars from "../src/domain/Cars.js";

// Cars validate 메소드 테스트
describe("Cars 이름에 유효하지 않은 입력이 들어왔을 때", () => {
  // 예외 테스트
  test.each`
    testTitle                                | carNames              | expected
    ${"Cars 이름은 무조건 입력되어야 한다."} | ${""}                 | ${ERROR_MESSAGE.nameLength}
    ${"중복된 이름은 없어야 한다."}          | ${"pobi,pobi,  pobi"} | ${ERROR_MESSAGE.duplicated}
  `("$testTitle테스트는 $carNames이 입력되면 $expected 에러를 던진다.", ({ carNames, expected }) => {
    expect(() => new Cars(carNames)).toThrow(expected);
  });
});
