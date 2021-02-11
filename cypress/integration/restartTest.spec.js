import { selectors } from "../../src/js/keys.js";

describe("다시 시작 버튼 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });

  it("다시 시작 버튼을 누르면 게임이 초기화 되는 것을 확인한다..", () => {
    const restartBtnTest = (carNames, round) => {
      cy.get(selectors.carNamesInput).type(carNames);
      cy.get(selectors.carNamesSubmit).click();
      cy.get(selectors.countInput).type(round);

      cy.get(selectors.countSubmit).click();  

      cy.wait(round * 1000);

      cy.get(selectors.restartButton).click();

      cy.get(selectors.carNamesInput).should("have.text", "");
      cy.get(selectors.countInput).should("have.text", "");
      cy.get(selectors.countContainer).should("not.to.be.visible");
      cy.get(selectors.racingCarsArea).should("have.text", "");
      cy.get(selectors.racingCarsArea).should("not.to.be.visible");

      cy.get(selectors.winnerContainer).should("not.to.be.visible");
      cy.get(selectors.winnerContainer).should("not.have.text", "h2");
    };
    restartBtnTest("a,b,c,d,e", 5);
    restartBtnTest("a,b,c,d,e,EAST, WEST, SOUTH, NORTH", 10);
  });
});
