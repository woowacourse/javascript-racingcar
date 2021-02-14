import { SELECTOR } from '../../src/js/keys.js';

describe('다시 시작 버튼 테스트', () => {
	before(() => {
		cy.visit('/');
	});

	it('다시 시작 버튼을 누르면 게임이 초기화 되는 것을 확인한다..', () => {
		const restartBtnTest = (carNames, round) => {
			cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);
			cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();
			cy.get(SELECTOR.COUNT_INPUT).type(round);

			cy.get(SELECTOR.COUNT_SUBMIT).click();

			cy.wait(round * 1000);

			cy.get(SELECTOR.RESTART_BUTTON).click();

			cy.get(SELECTOR.CAR_NAMES_INPUT).should('have.text', '');
			cy.get(SELECTOR.COUNT_INPUT).should('have.text', '');
			cy.get(SELECTOR.COUNT_CONTAINER).should('not.to.be.visible');
			cy.get(SELECTOR.RACING_CARS_AREA).should('have.text', '');
			cy.get(SELECTOR.RACING_CARS_AREA).should('not.to.be.visible');

			cy.get(SELECTOR.WINNER_CONTAINER).should('not.to.be.visible');
			cy.get(SELECTOR.WINNER_CONTAINER).should('not.have.text', 'h2');
		};
		restartBtnTest('a,b,c,d,e', 5);
		restartBtnTest('a,b,c,d,e,EAST, WEST, SOUTH, NORTH', 10);
	});
});
