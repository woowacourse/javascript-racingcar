import Model from "../../../src/js/Model.js";

/// <reference types="cypress" />

context("tdd", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/javascript-racingcar/index.html");
	});

	it("이름 입력 칸에 ','로 구분해서 이름을 입력할 수 있다.", () => {
		Model.makeCarNames("a,b,c");
		const expectedValues = ["a", "b", "c"];

		for (let i = 0; i < array.length; i++) {
			expect(Model.cars[i]).to.equal(expectedValues[i]);
		}
	});
});
