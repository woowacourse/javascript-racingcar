const CarRaceGame = require("../src/domain/CarRaceGame");

describe("자동차 경주 기능 테스트", () => {
  test("라운드 첫 시작 시 거리 초기화 테스트", () => {
    const car = new CarRaceGame();
    car.setCarNames(["Rulu", "24"]);
    expect(car.updateRace([0, 0])).toEqual([0, 0]);
  });
  test("라운드 이어서 진행시 거리 업데이트 테스트", () => {
    const car = new CarRaceGame();
    car.setCarNames(["Rulu", "24"]);
    car.updateRace([0, 1]);
    car.updateRace([1, 1]);
    expect(car.updateRace([1, 0])).toEqual([2, 2]);
  });

  test("큰 거리에서의 업데이트 테스트", () => {
    const car = new CarRaceGame();
    car.setCarNames(["Rulu", "24"]);
    car.updateRace([11111111111110, 11111111111111]);
    expect(car.updateRace([0, 1])).toEqual([11111111111110, 11111111111112]);
  });

  test("큰 숫자의 라운드 진행 시 거리 업데이트 테스트", () => {
    const car = new CarRaceGame();
    car.setCarNames(["Rulu", "24"]);
    for(let i = 0; i < 99999; i++){
      car.updateRace([1,1]);
    }
    expect(car.updateRace([0, 1])).toEqual([99999, 100000]);
  });
});

describe("우승자 반환 테스트", () => {
  test("경기 종료 후 우승자 반환 테스트", () => {
    const car = new CarRaceGame();
    car.setCarNames(["Rulu", "24", "cute"]);
    car.updateRace([0, 0, 1]);
    expect(car.judgeWinners()).toEqual("cute");
  });

  test("공동 우승자 반환 테스트", () => {
    const car = new CarRaceGame();
    car.setCarNames(["Rulu", "24", "cute"]);
    car.updateRace([3, 1, 3]);
    expect(car.judgeWinners()).toEqual("Rulu, cute");
  });
});
