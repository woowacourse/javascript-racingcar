import Car from "../src/domains/Car";
import Race from "../src/domains/Race";

//자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
describe("Race 단위 테스트", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;
  const DUMMY_TRY_COUNT = 0;

  test("경주가 끝나면 최대 이동거리를 가진 자동차를 알려준다.(단독 우승)", () => {
    const carsInstance = [new Car("Niya"), new Car("Hoyy")];

    carsInstance[0].move(MOVING_FORWARD);
    carsInstance[1].move(STOP);

    const race = new Race(carsInstance, DUMMY_TRY_COUNT);
    expect(race.getWinners()).toEqual(["Niya"]);
  });

  test("경주가 끝나면 최대 이동거리를 가진 자동차들을 알려준다.(공동 우승)", () => {
    const carsInstance = [new Car("Niya"), new Car("Hoyy")];

    carsInstance[0].move(MOVING_FORWARD);
    carsInstance[1].move(MOVING_FORWARD);

    const race = new Race(carsInstance, DUMMY_TRY_COUNT);
    expect(race.getWinners()).toEqual(["Niya", "Hoyy"]);
  });
});
