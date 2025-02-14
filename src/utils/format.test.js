import { formatRacingResult } from "./format.js";

describe("formatRacingResult 함수 테스트", () => {
  test("자동차 이름 'pobi'와 거리 3이 주어졌을 때, 해당하는 형식으로 반환한다.", () => {
    const carName = "pobi";
    const distance = 3;
    const expected = "pobi: ---\n";
    expect(formatRacingResult(carName, distance)).toBe(expected);
  });
});
