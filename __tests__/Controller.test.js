import Controller from "../src/Controller/Controller";
import Car from "../src/Model/Car";
import InputView from "../src/View/InputView";
import OutputView from "../src/View/OutputView";

describe("Controller 객체 테스트", () => {
  test.each([
    [
      [
        ["리버", 3],
        ["러기", 5],
        ["헤일리", 5],
      ],
      ["러기", "헤일리"],
    ],
    [
      [
        ["리버", 0],
        ["러기", 0],
        ["헤일리", 0],
      ],
      [],
    ],
  ])("우승자 계산을 해야된다.", (info, expectedValue) => {
    // arrange
    const controller = new Controller();
    const cars = info.map(([name, distance]) => {
      const car = new Car(name);
      car.getName = jest.fn(() => name);
      car.getDistance = jest.fn(() => distance);
      return car;
    });

    // action
    const { winners } = controller.calculateWinners(cars);

    // assert
    expect(winners.map((car) => car.getName())).toStrictEqual(expectedValue);
  });

  const mockQuestions = (inputs) => {
    InputView.readLine = jest.fn();

    InputView.readLine.mockImplementation(() => {
      const input = inputs.shift();

      return Promise.resolve(input);
    });
  };

  const getLogSpy = () => {
    const logSpy = jest.spyOn(console, "log");
    logSpy.mockClear();

    return logSpy;
  };
  test.only("", async () => {
    //Arrange
    const logSpy = getLogSpy();
    const app = new Controller();
    mockQuestions(["test", "0", "1"]);
    //Action
    await app.run();
    //Assert
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
