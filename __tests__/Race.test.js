import Race from "../src/domain/Race.js";
import Car from "../src/domain/Car.js";
import { MOVE_CONDITION } from "../src/constants/Constants.js";


describe("조건에 따른 자동차 이동 테스트", () => {
  test(`randomNumber가 ${MOVE_CONDITION}  이상이면 자동차가 움직여야 한다.`, () => {
    const sui = new Car("수이")
    const suii = new Car("수이이")
    const race = new Race([sui,suii])
  
    race.checkMove(MOVE_CONDITION ,sui)

    expect(sui.position).toBe(1);
  });

  test(`randomNumber가 ${MOVE_CONDITION} 미만이면 자동차가 움직이지 않아야 한다.`, () => {
    const sui = new Car("수이")
    const suii = new Car("수이이")
    const race = new Race([sui,suii])
  
    race.checkMove(MOVE_CONDITION-1,sui)

    expect(sui.position).toBe(0);
  });
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
