/* eslint-disable */

const CarRaceGame = require("../src/domain/CarRaceGame");
const CarRaceResultRandomGenerator = require("../src/domain/CarRaceResultRandomGenerator");
const mockedFunction = CarRaceResultRandomGenerator.generate;
jest.mock("../src/domain/CarRaceResultRandomGenerator");

describe("[CarRaceGame - updateRace] 현재 자동차의 이동 거리가 주어지면, 시뮬레이션 이후 올바른 이동 거리를 반환하여야 한다.", () => {
  test("라운드 진행 시 거리 업데이트 테스트", () => {
    mockedFunction.mockReturnValueOnce([1, 1, 1, 0, 0]);
    expect(CarRaceGame.updateRace([3, 4, 5, 6, 7])).toEqual([4, 5, 6, 6, 7]);
  });

  test("라운드 첫 시작 시 거리 업데이트 테스트", () => {
    mockedFunction.mockReturnValueOnce([1, 0, 1, 0, 1, 0, 1]);
    expect(CarRaceGame.updateRace([0, 0, 0, 0, 0, 0, 0])).toEqual([1, 0, 1, 0, 1, 0, 1]);
  });

  test("큰 숫자의 라운드 진행 시 거리 업데이트 테스트", () => {
    mockedFunction.mockReturnValueOnce([1]);
    expect(CarRaceGame.updateRace([1234567])).toEqual([1234568]);
  });
});

describe("[CarRaceGame - judgeWinners] 자동차의 이름과 거리에 대한 정보가 주어지면, 우승자를 올바르게 반환하여야 한다.", () => {
  test("경기 종료 후 우승자 반환 테스트", () => {
    const carNames = ["carA", "carB", "carC"];
    const carDistances = [4, 5, 3];
    expect(CarRaceGame.judgeWinners(carNames, carDistances)).toEqual("carB");
  });

  test("공동 우승자 반환 테스트", () => {
    const carNames = ["carA", "carB", "carC"];
    const carDistances = [5, 3, 5];
    expect(CarRaceGame.judgeWinners(carNames, carDistances)).toEqual("carA, carC");
  });
});