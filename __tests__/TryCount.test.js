import ERROR_MESSAGE from "../src/error/message.js";
import TryCount from "../src/domain/TryCount.js";

describe("tryCount에 유효한 입력이 들어왔을 때", () => {
  test.each`
    testTitle                                        | tryCount | expected
    ${"1~10사이의 숫자이므로 1은 유효한 숫자이다."}  | ${"1"}   | ${1}
    ${"1~10사이의 숫자이므로 10은 유효한 숫자이다."} | ${"10"}  | ${10}
  `("$testTitle $tryCount이 입력되면 $expected 횟수를 출력한다.", ({ tryCount, expected }) => {
    expect(new TryCount(tryCount).getTryCount()).toEqual(expected);
  });
});

describe("tryCount에 유효하지 않은 입력이 들어왔을 때", () => {
  test.each`
    testTitle                                | tryCount  | expected
    ${"입력을 무조건 해야한다."}             | ${""}     | ${ERROR_MESSAGE.tryCountEmpty}
    ${"정수만 입력해야한다."}                | ${"$$%^"} | ${ERROR_MESSAGE.isNan}
    ${"띄어쓰기만 입력하면 안된다."}         | ${" "}    | ${ERROR_MESSAGE.tryCountRange}
    ${"1 ~ 10 사이의 숫자만 입력해야 한다."} | ${"0"}    | ${ERROR_MESSAGE.tryCountRange}
    ${"1 ~ 10 사이의 숫자만 입력해야 한다."} | ${"11"}   | ${ERROR_MESSAGE.tryCountRange}
  `("$testTitle $tryCount이 입력되면 $expected 에러를 던진다.", ({ tryCount, expected }) => {
    expect(() => new TryCount(tryCount)).toThrow(expected);
  });
});
