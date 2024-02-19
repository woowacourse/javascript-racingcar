import RaceWinner from "../src/domain/RaceWinner";

describe("경주 우승자를 구하는 테스트", () => {
  test("5개의 자동차 중 최종 우승자 구하기", () => {
    //Arrange
    const carsMoveInfoList = [
      { carName: "a", moveTrace: [false, false, false, false, true] },
      { carName: "b", moveTrace: [false, false, true, true, true] },
      { carName: "c", moveTrace: [false, false, true, true, true] },
      { carName: "d", moveTrace: [true, true, false, true, true] },
      { carName: "e", moveTrace: [false, false, false, false, true] },
    ];
    const winner = ["d"];

    //Act
    const raceWinner = new RaceWinner(carsMoveInfoList);

    //Assert
    expect(raceWinner.getRaceWinner()).toEqual(winner);
  });

  test("최종 우승자는 두 명 이상일 수 있다. ", () => {
    //Arrange
    const carsMoveInfoList = [
      { carName: "a", moveTrace: [false, false, false, false, true] },
      { carName: "b", moveTrace: [false, false, true, true, true] },
      { carName: "c", moveTrace: [false, false, true, true, true] },
    ];
    const winner = ["b", "c"];

    //Act
    const raceWinner = new RaceWinner(carsMoveInfoList);

    //Assert
    expect(raceWinner.getRaceWinner()).toEqual(winner);
  });
});
