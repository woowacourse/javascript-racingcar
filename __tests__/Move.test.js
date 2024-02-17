import Move from "../src/Move.js";
import { randomNum } from "../src/util/random.js";

describe("자동차 이동 테스트", () => {
  test(" 자동차 5번 이동 시도, 2번 성공", () => {
    //Arrange
    const mockRandom = [1, 2, 3, 4, 5];
    const carName = "a";

    const move = new Move(carName);
    randomNum = jest.fn();
    mockRandom.map((num) => randomNum.mockReturnValueOnce(num));

    //Act
    for (let i = 0; i < 5; i++) {
      move.move();
    }

    //Assert
    expect(move.getInfo()).toEqual({
      carName: "a",
      moveTrace: [false, false, false, true, true],
    });
  });

  test("5회 시도 시 전부 실패", () => {
    //Arrange
    const mockRandom = [0, 0, 0, 0, 0];
    const carName = "a";

    const move = new Move(carName);
    Random.randomNum = jest.fn();
    mockRandom.map((num) => Random.randomNum.mockReturnValueOnce(num));

    //Act
    for (let i = 0; i < 5; i++) {
      move.move();
    }

    //Assert
    expect(move.getInfo()).toEqual({
      carName: "a",
      moveTrace: [false, false, false, false, false],
    });
  });

  test("5회 시도 시 전부 성공", () => {
    //Arrange
    const mockRandom = [4, 4, 4, 4, 4];
    const carName = "a";

    const move = new Move(carName);
    Random.randomNum = jest.fn();
    mockRandom.map((num) => Random.randomNum.mockReturnValueOnce(num));

    //Act
    for (let i = 0; i < 5; i++) {
      move.move();
    }

    //Assert
    expect(move.getInfo()).toEqual({
      carName: "a",
      moveTrace: [true, true, true, true, true],
    });
  });
});
