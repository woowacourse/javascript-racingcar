import Car from '../../src/js/model/Car.js';
import { getRandomNumber } from '../../src/js/utils.js';
import { bounds, selectors } from '../../src/js/keys.js';
import { appendArrowElement } from '../../src/js/view/racingView.js';

describe('자동차 레이싱 테스트', () => {
	before(() => {
		cy.visit('http://localhost:5500/index.html');
	});
	// it('자동차 객체가 올바르게 생성되었는지 확인한다.', () => {
	// 	const checkCarGenerator = (carNames) => {
	// 		cy.visit('http://localhost:5500/index.html');
	// 		const carNamesList = carNames.split(',');
	// 		cy.get(selectors.carNamesInput).type(carNamesList.join(','));
	// 		cy.get(selectors.carNamesSubmit).click();
	// 		cy.get(selectors.countInput).type(5);
	// 		cy.get(selectors.countSubmit).click();
	// 		cy.get(selectors.carPlayer).each((element, index) => {
	// 			const carNameElement = element[0];
	// 			expect(carNameElement.innerText).to.equal(carNamesList[index]);
	// 		});
	// 	};
	// 	checkCarGenerator('a,b,c,d,e');
	// 	checkCarGenerator('a,b,c,d,e,ee');
	// });

	// it('random 값이 0에서 9 사이의 정수인지 확인한다.', () => {
	// 	const numberList = Array.from({ length: 10 }, (_, i) => i);
	// 	for (let i = 0; i < 1000; i++) {
	// 		expect(numberList).to.include(getRandomNumber());
	// 	}
	// });

	// it('자동차는 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈추는지 확인한다.', () => {
	// 	const moveOrNotTest = (number, isMoved) => {
	// 		const newCar = new Car('test');
	// 		if (bounds.goOrStopBound <= number) newCar.moveForward();
	// 		expect(newCar.position).to.equal(Number(isMoved));
	// 	};

	// 	moveOrNotTest(1, false);
	// 	moveOrNotTest(6, true);
	// 	moveOrNotTest(4, true);
	// });

	// it('자동차가 전진했을 경우만 화살표가 나타나는지 확인한다.', () => {
	// 	const newElement = document.createElement('div');
	// 	const newCar = new Car('test');

	// 	newElement.innerHTML = '<div class="car-player"></div>';

	// 	const arrowAppearTest = (moveCnt, shouldVisible) => {
	// 		if (bounds.goOrStopBound <= moveCnt) {
	// 			newCar.moveForward();
	// 			appendArrowElement(newElement);
	// 		}
	// 		shouldVisible
	// 			? expect(newElement).to.contain('⬇️')
	// 			: expect(newElement).to.not.contain('⬇️');
	// 	};
	// 	arrowAppearTest(1, false);
	// 	arrowAppearTest(6, true);
	// });

	it('레이싱이 끝나기 전까지 spinner가 존재하는 지 확인한다.', () => {
		cy.visit('http://localhost:5500/index.html');
		const carNamesList = ['a', 'b', 'c', 'd', 'e'];
		let count = 10;
		cy.get(selectors.carNamesInput).type(carNamesList.join(','));
		cy.get(selectors.carNamesSubmit).click();
		cy.get(selectors.countInput).type(count);
		cy.get(selectors.countSubmit).click();
		// 
		while(count-- > 2){
			cy.get(selectors.spinnerContainer).should('to.be.visible');
			cy.wait(1000);
		}
		cy.get(selectors.spinnerContainer).should('not.exist');
	});
});
