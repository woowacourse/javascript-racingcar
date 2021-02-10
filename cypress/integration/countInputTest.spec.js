import { selectors } from "../../src/js/keys.js";

describe("시도 횟수 입력 테스트", () => {
    const countInputTest = function (count, shouldBeVisible) {
        cy.visit("http://localhost:5500/index.html");
        cy.get(selectors.carNamesInput).type("a,b,c,d,e");
        cy.get(selectors.carNamesSubmit).click();
        cy.get(selectors.countInput).type(count);
        cy.get(selectors.countSubmit).click();

        if(shouldBeVisible){
            cy.get(selectors.racingContainer).should("to.be.visible");    
            cy.get(selectors.countInput).should('have.attr', 'disabled');
            cy.get(selectors.countSubmit).should('have.attr', 'disabled');

        }else{
            cy.get(selectors.racingContainer).should("not.to.be.visible");    
        }
    };

    it("시도횟수는 1이상이어야 한다.", () => {
        countInputTest("-1", false);
        countInputTest("0", false);
        countInputTest("1", true);
        countInputTest("101", false);
    });
});
