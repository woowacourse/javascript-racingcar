import Model from "../../../src/js/Model.js";
import { countBy } from "cypress/types/lodash";

/// <reference types="cypress" />

context("tdd", () => {
	it("이름 입력 칸에 ','로 구분해서 이름을 입력할 수 있다.", () => {
		Model.setCarNames("a,b,c");
		expect(Model.cars).to.deep.equal(["a", "b", "c"]);
	});

	it("랜덤 숫자는 0에서 9 사이의 정수여야 한다.", () => {
		for (let i = 0; i < 909; i++) {
			expect(/[0-9]/.test(Model.getRandomNumber({ startNumber: 0, endNumber: 9 }))).to.equal(true);
		}
	});

	it("각 자동차는 입력한 횟수만큼 반복하여 랜덤 숫자를 배정받고, 랜덤 숫자가 4-9일 때 전진 횟수가 1 증가한다.", () => {
		Model.setCarNames("가,나,다");
		Model.setCount("3");
		Model.move(Model.cars[0], 2);
		expect(Model.cars[0].score).to.equal(0);
		Model.move(Model.cars[0], 0);
		expect(Model.cars[0].score).to.equal(0);
		Model.move(Model.cars[0], 8);
		expect(Model.cars[0].score).to.equal(1);

		// for 문을 돌아서 (횟수만큼)
		// for 문을 돌아서 (자동차만큼)
		// 랜덤숫자가 자동차 수 * 횟수만큼 만들어짐
		// if randomNumber >= 4
		// Model의 cars[i] (자동차) .score += 1
		// 자동차 for문 종료
		// render 화살표
		// 횟수 for문 종료

		// for(let i=0; i<Model.count; i++) {
		// 	for(let j=0; j<Model.cars.length; j++) {
		// 		const num = Model.getRandomNumber({ startNumber: 0, endNumber: 9 })
		// 		if(num >= 4) {
		// 			Model.cars[j].score += 1
		// 		}
		// 	}
		// }
	});
});
