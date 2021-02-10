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

	it("이름 입력 칸에 이름을 입력하고 확인 버튼을 누르면 칸이 비워지고, 횟수 입력 칸이 나온다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH");
		cy.get("#name-submit-button").click();
		cy.get("#count-input").should("exist");
		cy.get("#count-submit-button").should("exist");
	});

	it("이름 입력 칸은 알파벳, 한글, ‘,’만 입력 가능하다.", () => {
		cy.get("#name-input").type("EA45ST3?S가!능");
		cy.get("#name-input").should("have.value", "EASTS가능");
		cy.reload();
		cy.get("#name-input").type("1234자동차");
		cy.get("#name-input").should("have.value", "자동차");
		cy.reload();
		cy.get("#name-input").type("!@#1자동#$,123차");
		cy.get("#name-input").should("have.value", "자동,차");
	});

	it("횟수 입력 칸에 placeholder('시도 횟수')가 있다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH");
		cy.get("#name-submit-button").click();
		cy.get("#count-input").should("have.attr", "placeholder", "시도 횟수");
	});

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 칸이 비워진다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH");
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3");
		cy.get("#count-submit-button").click();
		cy.get("#count-input").should("have.value", "");
	});

	it("횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 진행창/결과창/리셋 버튼이 나온다.", () => {
		cy.get("#name-input").type("EAST, WEST, SOUTH, NORTH");
		cy.get("#name-submit-button").click();

		cy.get("#count-input").type("3");
		cy.get("#count-submit-button").click();

		cy.get("#race-progress-container").should("exist");
		cy.get("#result-container").should("exist");
		cy.get("#reset-button").should("exist");
	});
});
