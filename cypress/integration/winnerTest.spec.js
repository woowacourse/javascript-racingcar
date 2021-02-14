import { SELECTOR, GLOBAL_TEXT } from '../../src/js/keys.js';

describe('레이싱 우승자 테스트', () => {
	before(() => {
		cy.visit('http://localhost:5501/index.html');
	});

	const checkWinnerTest = (testFunction) => {
		let winners = [];
		let maxPosition = 0;

		cy.get(SELECTOR.CAR_NAMES_INPUT).type('a,b,c,d,e');
		cy.get(SELECTOR.CAR_NAMES_SUBMIT).click();
		cy.get(SELECTOR.COUNT_INPUT).type(5);
		cy.get(SELECTOR.COUNT_SUBMIT).click();

		cy.wait(5000);

		cy.get(`${SELECTOR.RACING_CARS_AREA} > div`)
			.each((element) => {
				const carElement = element[0];
				const length = carElement.innerText.split('\n').length;
				const currWinner = carElement.innerText.split('\n')[0];
				if (maxPosition < length) {
					maxPosition = length;
					winners = [currWinner];
				} else if (maxPosition === length) {
					winners.push(currWinner);
				}
			})
			.then(() => {
				testFunction(winners);
				cy.get(SELECTOR.RESTART_BUTTON).click();
			});
	};

	it('자동차 경주 게임을 완료한 후, 누가 우승했는지 확인한다.', () => {
		checkWinnerTest((winners) => {
			cy.get(SELECTOR.WINNER_TEXT_AREA).should(
				'have.text',
				GLOBAL_TEXT.MAKE_WINNER_TEXT(winners),
			);
		});
	});

	it('자동차 경주 게임이 끝난 뒤 2초뒤에 우승자 얼럿이 노출되는지 확인한다.', () => {
    checkWinnerTest((winners) => {
			cy.wait(2000);
		cy.on('window:alert', (str) => {
			expect(str).to.equal(GLOBAL_TEXT.MAKE_WINNER_TEXT(winners));
		});
		});
		
	});
});
