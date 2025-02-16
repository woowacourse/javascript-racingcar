import Car from "../src/domain/Car.js";
import Race from "../src/domain/Race.js";

const predictableRandomNumber = (() => {
  const numbers = [3, 5, 7, 2, 8];
  let index = 0;
  return () => {
    const number = numbers[index];
    index = (index + 1) % numbers.length;
    return number;
  };
})();

describe("자동차 경주 한 라운드 테스트", () => {
  let originalGetRandomNumber;
  beforeEach(() => {
    originalGetRandomNumber = global.getRandomNumber;
    global.getRandomNumber = predictableRandomNumber;
  });

  afterEach(() => {
    global.getRandomNumber = originalGetRandomNumber;
  });
  test("자동차 한 라운드 진행 후 전진 정도가 변한다.(한대일 경우)", () => {
    const CARS = [new Car("머핀")];
    const race = new Race();
    race.runRound(CARS);

    expect(CARS[0].getPosition()).toBe(0);
  });

  test("자동차 한 라운드 진행 후 전진 정도가 변한다.(여러대일 경우)", () => {
    const CARS = [new Car("머핀"), new Car("데이지")];

    const race = new Race();
    race.runRound(CARS);

    expect(CARS[0].getPosition()).toBe(0);
    expect(CARS[1].getPosition()).toBe(1);
  });
});

describe("자동차 경주 테스트", () => {
  test("경주 완료 후 전진 정도가 변화한다.", () => {
    // given
    // getRandomNumber를 예측 가능한 함수로 대체
    const originalGetRandomNumber = global.getRandomNumber;
    global.getRandomNumber = predictableRandomNumber;

    const CARS = [new Car("머핀"), new Car("데이지")];
    const RESULT = [1, 1];
    const TRY_COUNT = 2;

    const race = new Race();

    //when
    race.runRace(CARS, TRY_COUNT);

    //then
    CARS.forEach((car, index) => {
      expect(car.getPosition()).toEqual(RESULT[index]);
    });

    // getRandomNumber 원래 함수로 복구
    global.getRandomNumber = originalGetRandomNumber;
  });
});
