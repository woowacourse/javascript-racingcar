import pipe from "../../src/utils/pipe";

describe("utils/pipe", () => {
  test("단일 함수만 포함할 경우, 올바르게 실행 확인", () => {
    const double = (x) => x * 2;

    const result = pipe(double)(3);

    expect(result).toBe(6);
  });

  test("여러 개의 함수가 올바른 순서로 실행되는지 확인", () => {
    const double = (x) => x * 2;
    const square = (x) => x * x;
    const subtractFive = (x) => x - 5;

    // (3 * 2) -> 6 ** 2 -> 36 - 5 = 31
    const result = pipe(double, square, subtractFive)(3);

    expect(result).toBe(31);
  });

  test("첫 번째 함수가 여러 개의 인자를 받을 수 있는지 확인", () => {
    const add = (a, b) => a + b;
    const square = (x) => x * x;

    // (2 + 3) -> 5 ** 2 = 25
    const result = pipe(add, square)(2, 3);

    expect(result).toBe(25);
  });
});
