describe("다시 시작 버튼 테스트", () => {
    before(() => {
        cy.visit("http://localhost:5500/index.html");
    });

    it("다시 시작 버튼을 누르면 게임이 초기화 되는 것을 확인한다..", () => {
        const carNames = "a,b,c,d,e";
        for (let i = 0; i < 3; i++) {
            cy.get("#car-names-input").type(carNames);
            cy.get("#car-names-submit").click();
            cy.get("#count-input").type(5);
            cy.get("#count-submit").click();

            cy.get("#restart-button").click();

            cy.get("#car-names-input").should("have.text", "");
            cy.get("#count-input").should("have.text", "");
            cy.get("#count-container").should("not.to.be.visible");
            cy.get("#racing-container > section > div").should("have.text", "");
            cy.get("#racing-container > section > div").should("not.to.be.visible");
            cy.get("#winner-container").should("not.to.be.visible");
            cy.get("#winner-container > section").should("not.have.text", "h2");
        }
    });
});
