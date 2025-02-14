import { getRandomNumber } from "../src/utils/getRandomNumber.js";
import Race from "../src/domain/Race.js";
import Car from "../src/domain/Car.js";

jest.mock("../src/utils/getRandomNumber.js", () => ({
  getRandomNumber: jest.fn(),
}));

describe("조건에 따른 자동차 이동 테스트", () => {
  test("randomNumber가 4 이상이면 자동차가 움직여야 한다.", () => {
    getRandomNumber.mockReturnValue(4);
    const race = new Race(["Tesla"], 1);
    const car = race.carList[0];

    race.executeTurn();

    expect(car.position).toBe(1);
  });

  test("randomNumber가 3 이하이면 자동차가 움직이지 않아야 한다.", () => {
    getRandomNumber.mockReturnValue(3);

    const race = new Race(["Tesla"], 1);
    const car = race.carList[0];
    race.executeTurn();

    expect(car.position).toBe(0);
  })
})


test("공동 우승자 출력", () => {
  const suiCar = new Car("수이")
  const susuCar = new Car("수수")
  const iiCar = new Car("이이")
  
  suiCar.move()
  susuCar.move()

  const race = new Race([suiCar, susuCar, iiCar]);

  const winners = race.getWinnerName();

  expect(winners).toEqual(["수이", "수수"]);
});
