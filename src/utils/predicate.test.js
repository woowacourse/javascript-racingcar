import { isInRange, isDuplicate } from "./predicate.js";

describe("isInRange 함수 테스트", () => {
  const minRange = 0;
  const maxRange = 9;

  test("1은 최소 범위 0, 최대 범위 9 안에 포함된다.", () => {
    const targetValue = 1;
    expect(isInRange(minRange, maxRange, targetValue)).toBeTruthy();
  });

  test("-1은 최소 범위 0, 최대 범위 9 안에 포함되지 않는다.", () => {
    const targetValue = -1;
    expect(isInRange(minRange, maxRange, targetValue)).toBeFalsy();
  });

  test("10은 최소 범위 0, 최대 범위 9 안에 포함되지 않는다.", () => {
    const targetValue = 10;
    expect(isInRange(minRange, maxRange, targetValue)).toBeFalsy();
  });
});

describe("isDuplicate 함수 테스트", () => {
  test("[1, 1, 2]의 원소를 가진 배열은 중복이 있다.", () => {
    const array = [1, 1, 2];
    expect(isDuplicate(array)).toBeTruthy();
  });

  test("[1, 2, 3]의 원소를 가진 배열은 중복이 없다.", () => {
    const array = [1, 2, 3];
    expect(isDuplicate(array)).toBeFalsy();
  });
});
