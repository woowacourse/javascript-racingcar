import Cars from "../src/Cars";

describe("자동차 이름 입력 테스트", () => {
  test("자동차 이름 리스트 중복 검사", () => {
    const carList = ["a", "b", "c", "c"];

    expect(() => {
      new Cars(carList);
    }).toThrow();
  });

  test("자동차 이름 한 글지 이상 다섯 글자 이내 확인", () => {
    const carList = ["a", "b", "c", "c123456"];

    expect(() => {
      new Cars(carList);
    }).toThrow();
  });

  test("자동차 이름 제대로 입력되었을 때", () => {
    const carList = ["a", "b", "c", "d"];

    expect(() => {
      new Cars(carList);
    }).toBeTruthy();
  });

  test("자동차 리스트 출력 확인", () => {
    const carList = ["a", "b", "c", "d"];
    const cars = new Cars(carList);
    expect(cars.getCarList()).toEqual(["a", "b", "c", "d"]);
  });
});
