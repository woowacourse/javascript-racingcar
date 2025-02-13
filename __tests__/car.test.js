import Car from "../src/models/Car.js";

describe("Car 모델 클래스 테스트", () => {
  test.each(["Niya", "Hoyychoi"])("Car 클래스 생성 시 name 값이 잘 반환되고 count가 0으로 초기화 되는지는지 확인한다.", (name) => {
    // given
    // when
    const car = new Car(name);
    // then
    expect(car.name).toEqual(name);
    expect(car.count).toBe(0);
  });

  test.each([
    ["무작위 랜덤 값이 4 이상일 경우 count가 1 증가한다.", 9, 1],
    ["무작위 랜덤 값이 4 미만일 경우 count가 그대로 유지된다.", 3, 0],
  ])("%s", (_, randomNumber, expectedNumber) => {
    // given
    // when
    const car = new Car("Niya");
    car.move(randomNumber);
    // then
    expect(car.count).toEqual(expectedNumber);
  });
});
