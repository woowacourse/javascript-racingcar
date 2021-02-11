import Model from "../../../src/js/Model.js";

/// <reference types="cypress" />

context("tdd", () => {
	it("이름 입력 칸에 ','로 구분해서 이름을 입력할 수 있다.", () => {
		Model.setCarNames("a,b,c");
		expect(Model.cars).to.deep.equal(["a", "b", "c"]);
	});

	it("랜덤한 숫자가 0에서 9 사이의 정수여야 한다.", () => {
		for (let i = 0; i < 909; i++) {
			expect(/[0-9]/.test(Model.getRandomNumber({ startNumber: 0, endNumber: 9 }))).to.equal(true);
		}
	});
});
