import Car from "../src/domains/Car";

describe("자동차 도메인 로직 테스트", () => {
  let harryCar;

  beforeEach(() => {
    harryCar = new Car("harry");
  });

  test.each([1, 2, 3])(
    "숫자가 4미만인 경우 자동차는 전진할 수 없다",
    (number) => {
      // given
      const INITIAL_POSITION = 0;
      // when
      harryCar.move(number);

      // then
      expect(harryCar.position).toBe(INITIAL_POSITION);
    }
  );

  test.each([4, 5, 6, 7, 8, 9])(
    "숫자가 4이상인 경우 자동차는 전진해야 한다.",
    (number) => {
      // given
      const EXPECTED_POSITION = 1;

      // when
      harryCar.move(number);

      // then
      expect(harryCar.position).toBe(EXPECTED_POSITION);
    }
  );

  it("두 자동차의 위치가 같은 경우 true를 반환해야 한다.", () => {
    // given
    const bongCar = new Car("bong");

    // when
    harryCar.move(4);
    bongCar.move(7);

    // then
    const isSame = harryCar.isSamePosition(bongCar);
    expect(isSame).toBe(true);
  });

  it("두 자동차의 위치가 다른 경우 false 반환해야 한다.", () => {
    // given
    const bongCar = new Car("bong");

    // when
    harryCar.move(1);
    bongCar.move(9);

    // then
    const isSame = harryCar.isSamePosition(bongCar);
    expect(isSame).toBe(false);
  });

  it("자동차 도메인은 다른 자동차 도메인과 위치 비교를 할 수 있어야 한다.", () => {
    // given
    const bongCar = new Car("bong");

    // when
    harryCar.move(1);
    bongCar.move(7);

    // then
    const isAheadOf = harryCar.isAheadOf(bongCar);
    expect(isAheadOf).toBe(false);
  });
});
