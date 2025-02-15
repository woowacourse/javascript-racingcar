import Car from "../src/domains/Car";

describe("Car 단위 테스트", () => {
  test("자동차가 생성되는지 확인한다.", () => {
    const car = new Car();
    expect(car).toBeInstanceOf(Car);
  });

  test.each(["Niya", "Hoyychoi"])("자동차의 이름이 맞게 생성되는지 확인한다.", (name) => {
    // given
    // when
    const car = new Car(name);
    // then
    expect(car.name).toBe(name);
  });

  test("자동차가 생성되면 멈춰있다.", () => {
    const car = new Car("호이초이");
    // then
    expect(car.count).toBe(0);
  });

  test.each([
    ["무작위 랜덤 값이 4 이상일 경우 자동차는 움직인다.", 9, 1],
    ["무작위 랜덤 값이 4 미만일 경우 자동차는 움직이지 않는다.", 3, 0],
  ])("%s", (_, randomNumber, expectedCount) => {
    // given
    // when
    const car = new Car("Niya");
    car.move(randomNumber);
    // then
    expect(car.count).toEqual(expectedCount);
  });
});
