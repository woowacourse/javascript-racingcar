/// <reference types="cypress" />

context("bdd", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/javascript-racingcar/index.html");
	});

	it("이름 입력 칸과 확인 버튼만 있다.", () => {
		cy.get(".w-100").should(($input) => {
			expect($input).to.have.length(1);
		});
		cy.get(".btn-cyan").should(($button) => {
			expect($button).to.have.length(1);
		});
	});
});
