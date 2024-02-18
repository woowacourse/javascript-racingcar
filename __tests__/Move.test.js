import MoveCarInfo from "../src/domain/MoveCarInfo.js";

describe("자동차 이동 테스트", () => {
  test("랜덤값이 3일 경우 전진하지 않음.(false를 반환)", () => {
    //Arrange
    const mockRandom = [3];
    const carName = "a";

    const move = new MoveCarInfo(carName);

    //Act
    for (let i = 0; i < mockRandom.length; i++) {
      move.move(mockRandom[i]);
    }

    //Assert
    expect(move.getCarMoveInfo()).toEqual({
      carName: "a",
      moveTrace: [false],
    });
  });

  test("랜덤값이 4일 경우 전진에 성공함.true를 반환)", () => {
    //Arrange
    const mockRandom = [4];
    const carName = "a";

    const move = new MoveCarInfo(carName);

    //Act
    for (let i = 0; i < mockRandom.length; i++) {
      move.move(mockRandom[i]);
    }

    //Assert
    expect(move.getCarMoveInfo()).toEqual({
      carName: "a",
      moveTrace: [true],
    });
  });
});
