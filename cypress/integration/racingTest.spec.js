import { getRandomNumber } from "../../src/js/controller/utils.js";
import Car from "../../src/js/model/Car.js";
import { displayArrow } from "../../src/js/view/racingView.js";

describe("자동차 레이싱 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });

  it("자동차 객체가 올바르게 생성되었는지 확인한다.", () => {
    const carNames = ["a", "b", "c", "d", "e"];
    cy.get("#car-names-input").type(carNames.join(","));
    cy.get("#car-names-submit").click();
    cy.get("#count-input").type(5);
    cy.get("#count-submit").click();
    cy.get(".car-player").each((element, index) => {
      const carNameElement = element[0];
      expect(carNameElement.innerText).to.equal(carNames[index]);
    });
  });

  it("random 값이 0에서 9 사이의 정수인지 확인한다.", () => {
    const numberList = Array.from({ length: 10 }, (_, i) => i);
    for (let i = 0; i < 1000; i++) {
      expect(numberList).to.include(getRandomNumber());
    }
  });

  it("자동차는 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈추는지 확인한다.", () => {
    const newCar = new Car("test");
    newCar.moveForward(1);
    expect(newCar.position).to.equal(0);
    newCar.moveForward(4);
    expect(newCar.position).to.equal(1);
  });

  it("자동차가 전진했을 경우만 화살표가 나타나는지 확인한다.", () => {
    const newElement = document.createElement("div");
    const newCar = new Car("test");
    if (newCar.moveForward(1)) {
      displayArrow(newElement);
    }
    expect(newElement).to.not.contain("⬇️");

    if (newCar.moveForward(6)) {
      displayArrow(newElement);
    }
    expect(newElement).to.contain("⬇️");
  });
});
