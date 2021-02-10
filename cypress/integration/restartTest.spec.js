import { selectors } from "../../src/js/keys.js";

describe("다시 시작 버튼 테스트", () => {
    before(() => {
        cy.visit("http://localhost:5500/index.html");
    });

    it("다시 시작 버튼을 누르면 게임이 초기화 되는 것을 확인한다..", () => {
        const carNames = "a,b,c,d,e";
        for (let i = 0; i < 3; i++) {
            cy.get(selectors.carNamesInput).type(carNames);
            cy.get(selectors.carNamesSubmit).click();
            cy.get(selectors.countInput).type(5);
            cy.get(selectors.countSubmit).click();

            cy.get(selectors.restartButton).click();

            cy.get(selectors.carNamesInput).should("have.text", "");
            cy.get(selectors.countInput).should("have.text", "");
            cy.get(selectors.countContainer).should("not.to.be.visible");
            cy.get(selectors.racingCarsArea).should("have.text", "");
            cy.get(selectors.racingCarsArea).should("not.to.be.visible");
            cy.get(selectors.winnerContainer).should("not.to.be.visible");
            cy.get(selectors.winnerContainer).should("not.have.text", "h2");
        }
    });
});
