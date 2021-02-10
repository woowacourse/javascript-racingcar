/// <reference types="cypress" />

context("bdd", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/javascript-racingcar/index.html");
	});

	it("이름 입력 칸과 확인 버튼만 있다.", () => {
		cy.get("#name-input").should("exist");
		cy.get("#name-submit-button").should("exist");
		cy.get("#count-input").should("not.exist");
		cy.get("#count-submit-button").should("not.exist");
	});

	it("이름 입력 칸에 placeholder('자동차 이름')가 있다.", () => {
		cy.get("#name-input").should("have.attr", "placeholder", "자동차 이름");
	});
});
