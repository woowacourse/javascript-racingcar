import Car from "../src/domain/Car";
import RaceRecord from "../src/domain/RaceRecord";

describe("RaceRecord 클래스 테스트", () => {
  let carA;
  let carB;
  let raceRecord;

  beforeAll(() => {
    carA = new Car("a");
    carB = new Car("b");
    raceRecord = new RaceRecord(["a", "b"]);
    carA.tryMove(4);
  });

  test("각 step을 기록하고 반환한다", () => {
    raceRecord.recordStep(carA);
    raceRecord.recordStep(carB);
    expect(raceRecord.toStringStep(1)).toBe("a : -\nb : ");
  });

  test("알맞은 우승자를 반환한다", () => {
    expect(raceRecord.getWinner()).toEqual(["a"]);
  });
});
