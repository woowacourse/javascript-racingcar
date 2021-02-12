import Model from "../../../src/js/Model.js";

/// <reference types="cypress" />

context("tdd", () => {
	it("이름 입력 칸에 ','로 구분해서 이름을 입력할 수 있다.", () => {
		Model.initCars("a,b,c");
		expect(Model.cars).to.deep.equal([
			{ name: "a", score: 0 },
			{ name: "b", score: 0 },
			{ name: "c", score: 0 },
		]);
	});

	it("랜덤 숫자는 0에서 9 사이의 정수여야 한다.", () => {
		for (let i = 0; i < 909; i++) {
			expect(/[0-9]/.test(Model.getRandomNumber({ startNumber: 0, endNumber: 9 }))).to.equal(true);
		}
	});

	it("각 자동차는 입력한 횟수만큼 반복하여 랜덤 숫자를 배정받고, 랜덤 숫자가 4-9일 때 전진 횟수가 1 증가한다.", () => {
		Model.initCars("가,나,다");
		Model.move(Model.cars[0]);
		expect(Model.cars[0].score).to.equal(1);
		Model.move(Model.cars[0]);
		expect(Model.cars[0].score).to.equal(2);
		Model.move(Model.cars[0]);
		expect(Model.cars[0].score).to.equal(3);
	});

	it("우승자를 리턴한다.", () => {
		Model.initCars("가,나,다");
		Model.move(Model.cars[0]);
		Model.move(Model.cars[0]);
		Model.move(Model.cars[1]);

		expect(Model.getWinners()).to.deep.equal(["가"]);
	});
});
