import { SELECTOR } from '../../src/js/keys.js';

describe('시도 횟수 입력 테스트', () => {
	const countInputTest = function (count, shouldBeVisible) {
		cy.visit('/');
		cy.get(SELECTOR.CAR_NAMES_INPUT).type('a,b,c,d,e');
		cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();
		cy.get(SELECTOR.COUNT_INPUT).type(count);
		cy.get(SELECTOR.COUNT_SUBMIT).click();

		if (shouldBeVisible) {
			cy.get(SELECTOR.RACING_CONTAINER).should('to.be.visible');
			cy.get(SELECTOR.COUNT_INPUT).should('have.attr', 'disabled');
			cy.get(SELECTOR.COUNT_SUBMIT).should('have.attr', 'disabled');
		} else {
			cy.get(SELECTOR.RACING_CONTAINER).should('not.to.be.visible');
		}
	};

	it('시도횟수는 1이상이어야 한다.', () => {
		countInputTest('-1', false);
		countInputTest('0', false);
		countInputTest('1', true);
		countInputTest('101', false);
	});
});
