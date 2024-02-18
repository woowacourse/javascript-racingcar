import getRandomNumberInRange from "../../src/utils/getRandomNumberInRange";
import CarInfo from "../../src/class/CarInfo";

jest.mock("../../src/utils/getRandomNumberInRange");

const mockRandom = (numbers) => {
  numbers.forEach((n) => {
    getRandomNumberInRange.mockReturnValueOnce(n);
  });
};

describe("CarInfo 클래스 테스트", () => {
  test(`CarInfo 인스턴스를 만들고, 
  setPosition 메서드를 호출하면 각 회차별 자동차가 전진한 정도를 저장한다. 
  getPositionWhen 메서드는 각 회차의 전진한 정도를 반환한다.`, () => {
    // Arrange
    const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const positions = [0, 0, 0, 0, 1, 2, 3, 4, 5, 6];

    mockRandom(randomNumbers);

    // Act
    const carInfo = new CarInfo("suya", 10);
    carInfo.setPosition();

    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(carInfo.getPositionWhen(i));
    }

    // Assert
    expect(result).toEqual(positions);
  });
});
