const OutputView = require("../src/view/OutputView");

describe("OutputView 객체 테스트", () => {
  const logSpy = jest.spyOn(global.console, "log");

  test("printMoveDistance 테스트", () => {
    const inputValues = [
      ["우형", 10],
      ["네이버", 4],
      ["카카오", 3],
    ];
    const expectedResults = [
      "우형 : ----------",
      "네이버 : ----",
      "카카오 : ---",
    ];

    inputValues.forEach(([name, distance], index) => {
      OutputView.printMoveDistance(name, distance);
      expect(logSpy).toHaveBeenCalledWith(expectedResults[index]);
    });
  });

  test("printWinner 테스트", () => {
    const inputValues = [
      ["우형"],
      ["우형", "네이버"],
      ["우형", "네이버", "카카오"],
    ];
    const expectedResults = [
      "우형(이)가 최종 우승했습니다.",
      "우형, 네이버(이)가 최종 우승했습니다.",
      "우형, 네이버, 카카오(이)가 최종 우승했습니다.",
    ];

    inputValues.forEach((winners, index) => {
      OutputView.printWinner(winners);
      expect(logSpy).toHaveBeenCalledWith(expectedResults[index]);
    });
  });
});
