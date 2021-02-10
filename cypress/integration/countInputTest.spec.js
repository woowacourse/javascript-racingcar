describe("시도 횟수 입력 테스트", () => {
    const countInputTest = function (count, shouldBeVisible) {
        cy.visit("http://localhost:5500/index.html");
        cy.get("#car-names-input").type("a,b,c,d,e");
        cy.get("#car-names-submit").click();
        cy.get("#count-input").type(count);
        cy.get("#count-submit").click();

        if(shouldBeVisible){
            cy.get("#racing-container").should("to.be.visible");    
            cy.get("#count-input").should('have.attr', 'disabled');
            cy.get("#count-submit").should('have.attr', 'disabled');

        }else{
            cy.get("#racing-container").should("not.to.be.visible");    
        }
    };

    it("시도횟수는 1이상이어야 한다.", () => {
        countInputTest("-1", false);
        countInputTest("0", false);
        countInputTest("1", true);
    });
});
