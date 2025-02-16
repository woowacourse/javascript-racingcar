import Car from "../src/model/Car.js";
import { getWinners, getWinnerPosition } from "../src/util/winner.js";

describe("우승자 선별 관련 테스트", () => {
  let car1;
  let car2;

  beforeEach(() => {
    car1 = new Car("seo");
    car2 = new Car("ohgus");
  });

  test("우승자 리스트를 가져올 수 있다.", () => {
    car1.move(1);
    car2.move(4);

    const winners = getWinners([car1, car2]);

    expect(winners.length).toBe(1);
  });

  test("우승자는 여러명일 수 있다.", () => {
    car1.move(4);
    car2.move(4);

    const winners = getWinners([car1, car2]);

    expect(winners.length).toBe(2);
  });

  test("우승자의 위치를 가져올 수 있다.", () => {
    car1.move(4);
    car1.move(4);

    const winnerPosition = getWinnerPosition([car1, car2]);

    expect(winnerPosition).toBe(2);
  });
});
