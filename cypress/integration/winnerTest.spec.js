import { getRandomNumber } from "../../src/js/controller/utils.js";
import Car from "../../src/js/model/Car.js";
import { displayArrow } from "../../src/js/view/racingView.js";

describe("레이싱 우승자 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });

  it("자동차 경주 게임을 완료한 후, 누가 우승했는지 확인한다.", () => {
    let winners = [];
    let maxPosition = 0;

    cy.get("#car-names-input").type("a,b,c,d,e");
    cy.get("#car-names-submit").click();
    cy.get("#count-input").type(5);
    cy.get("#count-submit").click();

    // 우승자 영역에서 자동차 이름 가져오기
    // document로 자동차별 화살표 개수 세기
    // 비교

    cy.get("#racing-cars > div")
      .each((element, index) => {
        //   console.log(element[0].innerText.split("\n"));
        // expect(carNameElement.innerText).to.equal(carNames.split(",")[index]);
        const carElement = element[0];
        const length = carElement.innerText.split("\n").length;
        if (maxPosition < length) {
          maxPosition = length;
          winners = [carElement.innerText.split("\n")[0]];
        } else if (maxPosition === length) {
          winners.push(carElement.innerText.split("\n")[0]);
        }
        // console.log(winners);
      })
      .then(() => {
        cy.get("#winner-container > section > h2").should(
          "have.text",
          `🏆 최종 우승자: ${winners.join(", ")} 🏆`
        );
      });
  });
});
