import Car from "../src/domains/Car.js";

describe("Car 모델 클래스 테스트", () => {
  test.each([
    ["무작위 랜덤 값이 4 이상일 경우 자동차가 전진한다.", 4, 1],
    ["무작위 랜덤 값이 4 미만일 경우 자동차가 멈춰있다.", 3, 0],
  ])("%s", (_, randomNumber, expectedNumber) => {
    // given
    // when
    const car = new Car("Niya");
    car.move(randomNumber);
    // then
    expect(car.count).toEqual(expectedNumber);
  });
});
