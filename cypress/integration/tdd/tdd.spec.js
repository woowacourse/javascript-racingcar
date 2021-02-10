import Model from "../../../src/js/Model.js";

/// <reference types="cypress" />

context("tdd", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5500/");
	});

	it("이름 입력 칸에 ','로 구분해서 이름을 입력할 수 있다.", () => {
		Model.setCarNames("a,b,c");
		expect(Model.cars).to.deep.equal(["a", "b", "c"]);
	});
});
