describe("", () => {
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

            // 자동차 이름 input 빈칸인지 체크
            cy.get("#car-names-input").should("have.text", "");
            // 시도횟수 input 빈칸, display none 인지 체크
            cy.get("#count-input").should("have.text", "");
            cy.get("#count-container").should("not.to.be.visible");
            // racing car도 display none // , 엘리먼트 없어야함
            cy.get("#racing-cars").should("not.to.be.visible");
            cy.get("#racing-cars").should("have.text", "");
            // winner container도 display none // , 엘리먼트 없어야함
            cy.get("#winner-container").should("not.to.be.visible");
            cy.get("#winner-container > section").should("not.have.text", "h2");
        }
    });
});
