import ERROR_MESSAGE from "../src/error/message.js";
import Car from "../src/domain/Car.js";

// Car validate 메소드 테스트
describe("Car 이름에 유효한 입력이 들어왔을 때", () => {
  test.each`
    testTitle                             | carName   | expected
    ${"pobi가 입력되면 pobi가 출력된다."} | ${"pobi"} | ${"pobi"}
    ${"cron이 입력되면 cron이 출력된다."} | ${"cron"} | ${"cron"}
  `("$testTitle테스트는 $carName이 입력되면 $expected 이름을 출력한다.", ({ carName, expected }) => {
    expect(new Car(carName).getName()).toEqual(expected);
  });
});

describe("Car 이름에 유효하지 않은 입력이 들어왔을 때", () => {
  test.each`
    testTitle                         | carName     | expected
    ${"입력을 무조건 해야한다."}      | ${""}       | ${ERROR_MESSAGE.nameLength}
    ${"이름은 5글자까지만 가능하다."} | ${"tenten"} | ${ERROR_MESSAGE.nameLength}
  `("$testTitle테스트는 $carName이 입력되면 $expected 에러를 던진다.", ({ carName, expected }) => {
    expect(() => new Car(carName)).toThrow(expected);
  });
});

// Car forward 테스트
describe("각 자동차가 올바르게 전진하고 정지하는 지 테스트", () => {
  test("4일 때는 전진하고 3일 때는 전진하지 않는다.", () => {
    // given
    const FORWARD = 4;
    const STOP = 3;
    const RANDOMS = [FORWARD, FORWARD, STOP, STOP];
    const outputs = [1, 2, 2, 2];

    //when
    const car = new Car("pobi");

    // then
    // 전진-정지 테스트
    outputs.forEach((output, i) => {
      car.forward(RANDOMS[i]);
      expect(car.getLocation()).toEqual(output);
    });
  });
});

describe("각 자동차가 올바르게 전진하고 정지하는 지 테스트", () => {
  test("9일 때는 전진하고 0일 때는 전진하지 않는다.", () => {
    // given
    const FORWARD = 9;
    const STOP = 0;
    const RANDOMS = [STOP, FORWARD, FORWARD, STOP, STOP, FORWARD];
    const outputs = [0, 1, 2, 2, 2, 3];

    //when
    const car = new Car("pobi");

    // then
    // 전진-정지 테스트
    outputs.forEach((output, i) => {
      car.forward(RANDOMS[i]);
      expect(car.getLocation()).toEqual(output);
    });
  });
});
