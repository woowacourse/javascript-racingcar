describe("시도 횟수 입력 테스트", () => {
    before(() => {
        cy.visit("http://localhost:5500/index.html");
    });

    const initialize = () => {
        cy.get("#car-names-input").clear();
        cy.get("#count-input").clear();
        cy.get("#count-container").invoke("attr", "style", "display: none");
        cy.get("#racing-container").invoke("attr", "style", "display: none");
    }
    const countInputTest = (count, result) => {
        cy.get("#car-names-input").type("a,b,c,d,e");
        cy.get("#car-names-submit").click();
        cy.get("#count-input").type(count);
        cy.get("#count-submit").click();

        cy.get("#racing-container").should(result ? "to.be.visible" : "not.to.be.visible");
        initialize(); // count-input을 찾을 수 있게하기 위해 함수 마지막에 위치시킴.
    }

    it('시도횟수는 1이상이어야 한다.', () => {
        countInputTest('-1', false);
        countInputTest('0', false);
        countInputTest('1', true);
    });
});