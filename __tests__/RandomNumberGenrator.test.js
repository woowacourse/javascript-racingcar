const RandomNumberGenerator = require("../src/utils/RandomNumberGenerator");

describe("RandomNumberGenerator 객체 테스트", () => {
  test("랜덤으로 생성된 숫자가 0과 9사이에 있는지 확인 ", () => {
    for (let i = 0; i < 100; i += 1) {
      const randomNumber = RandomNumberGenerator.generate();

      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(9);
    }
  });
});
