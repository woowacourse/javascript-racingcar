import RaceGame from "../../src/domain/RaceGame";
import getRandomNumberInRange from "../../src/utils/getRandomNumberInRange";

jest.mock("../../src/utils/getRandomNumberInRange");

const mockRandom = (numbers) => {
  numbers.forEach((n) => {
    getRandomNumberInRange.mockReturnValueOnce(n);
  });
};

describe("RaceGame 클래스 테스트", () => {
  test("start() 메소드를 호출하면 게임을 진행한 후, 결과를 반환한다.", () => {
    //Arrange
    const randomNumbers = [0, 1, 2, 3, 4, 1, 6, 7, 3, 9];
    const expectedResult = {
      suya: [0, 0, 1, 2, 2],
      sofa: [0, 0, 0, 1, 2],
      winners: ["suya", "sofa"],
    };
    mockRandom(randomNumbers);

    const carNames = ["suya", "sofa"];
    const raceGame = new RaceGame(carNames, 5);

    // Act
    const { cars, winners } = raceGame.start();
    const result = {
      suya: [],
      sofa: [],
      winners,
    };

    const suyaCar = cars.find((car) => car.getName() === "suya");
    const sofaCar = cars.find((car) => car.getName() === "sofa");
    for (let i = 0; i < 5; i++) {
      result.suya.push(suyaCar.getPositionWhen(i));
      result.sofa.push(sofaCar.getPositionWhen(i));
    }

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
