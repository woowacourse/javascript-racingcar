import Car from "../../src/js/model/Car.js";
import { getRandomNumber } from "../../src/js/utils/getRandomNumber.js";

describe("자동차 레이싱 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500");
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
      newElement.innerHTML += `<div class="forward-icon mt-2">⬇️️</div>`;
    }
    expect(newElement).to.not.contain("⬇️");

    if (newCar.moveForward(6)) {
      newElement.innerHTML += `<div class="forward-icon mt-2">⬇️️</div>`;
    }
    expect(newElement).to.contain("⬇️");
  });

  it("자동차 경주 게임의 턴이 1초의 텀을 두고 진행되는지 확인한다.", () => {
    const carNames = ["a", "b", "c", "d", "e"];
    const element = cy.get("#winner-container > section > h2");
    let maxPosition = 0;
    let winners = [];

    cy.get("#restart-button").click();
    cy.get("#car-names-input").type(carNames.join(","));
    cy.get("#car-names-submit").click();
    cy.get("#count-input").type(1);
    cy.get("#count-submit").click();
    cy.wait(1000);

    cy.get("#racing-container > section > div > div")
      .each((element, index) => {
        const carElement = element[0];
        const length = carElement.innerText.split("\n").length;
        if (maxPosition < length) {
          maxPosition = length;
          winners = [carElement.innerText.split("\n")[0]];
        } else if (maxPosition === length) {
          winners.push(carElement.innerText.split("\n")[0]);
        }
      })
      .then(() => {
        cy.get("#winner-container > section > h2").should(
          "have.text",
          `🏆 최종 우승자: ${winners.join(", ")} 🏆`
        );
      });
  });
});
