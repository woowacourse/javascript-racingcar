import Car from "../src/domains/Car.js";
import { MOVE_THRESHOLD } from "../src/constants/constants.js";

describe("Car 모델 클래스 테스트", () => {
  const MOVED_DISTANCE = 1;
  const STATIONARY = 0;

  test.each([
    [
      `무작위 랜덤 값이 ${MOVE_THRESHOLD} 이상일 경우 자동차가 전진한다.`,
      MOVE_THRESHOLD,
      MOVED_DISTANCE,
    ],
    [
      `무작위 랜덤 값이 ${MOVE_THRESHOLD} 미만일 경우 자동차가 멈춰있다.`,
      MOVE_THRESHOLD - 1,
      STATIONARY,
    ],
  ])("%s", (_, randomNumber, expectedNumber) => {
    // given
    // when
    const car = new Car("Niya");
    car.move(randomNumber);
    // then
    expect(car.count).toEqual(expectedNumber);
  });
});
