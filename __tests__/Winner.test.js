import Car from "../src/domain/Car";
import Winner from "../src/domain/Winner";

describe("최종 우승자 선별 테스트", () => {
  test("최종 우승자를 뽑고 출력한다.(우승자가 1명인 경우)", () => {
    const CARS = [new Car("데이지"), new Car("머핀")];
    // const CARS = [
    //   { name: "데이지", position: 3 },
    //   { name: "머핀", position: 1 },
    // ];
    CARS[0].setPostion(3);
    CARS[1].setPostion(1);
    const winners = new Winner();

    expect(
      winners.findWinner(CARS).map((winner) => winner.getName()),
    ).toStrictEqual(["데이지"]);
  });

  test("최종 우승자를 뽑고 출력한다.(우승자가 2명 이상인 경우", () => {
    const CARS = [new Car("데이지"), new Car("머핀")];

    // const CARS = [
    //   { name: "데이지", position: 5 },
    //   { name: "머핀", position: 5 },
    //   { name: "메리", position: 2 },
    // ];
    CARS[0].setPostion(3);
    CARS[1].setPostion(3);
    const winners = new Winner(CARS);

    expect(
      winners.findWinner(CARS).map((winner) => winner.getName()),
    ).toStrictEqual(["데이지", "머핀"]);
  });
});
