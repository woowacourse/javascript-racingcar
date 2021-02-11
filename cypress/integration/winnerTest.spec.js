import { selectors, globalTexts, alertMsg } from '../../src/js/keys.js';

describe('레이싱 우승자 테스트', () => {
	before(() => {
		cy.visit('http://localhost:5500/index.html');
	});

	// it('자동차 경주 게임을 완료한 후, 누가 우승했는지 확인한다.', () => {
	// 	const checkWinnerTest = () => {
	// 		let winners = [];
	// 		let maxPosition = 0;

	// 		cy.get(selectors.carNamesInput).type('a,b,c,d,e');
	// 		cy.get(selectors.carNamesSubmit).click();
	// 		cy.get(selectors.countInput).type(5);
	// 		cy.get(selectors.countSubmit).click();

	// 		cy.wait(5000);

	// 		cy.get(`${selectors.racingCarsArea} > div`)
	// 			.each((element) => {
	// 				const carElement = element[0];
	// 				const length = carElement.innerText.split('\n').length;
	// 				const currWinner = carElement.innerText.split('\n')[0];
	// 				if (maxPosition < length) {
	// 					maxPosition = length;
	// 					winners = [currWinner];
	// 				} else if (maxPosition === length) {
	// 					winners.push(currWinner);
	// 				}
	// 			})
	// 			.then(() => {
	// 				cy.get(selectors.winnerTextArea).should(
	// 					'have.text',
	// 					globalTexts.makeWinnerText(winners),
	// 				);
	// 				cy.get(selectors.restartButton).click();
	// 			});
	// 	};
	// 	for (let i = 0; i < 10; i++) {
	// 		checkWinnerTest();
	// 	}
	// });

	it('자동차 경주 게임이 끝난 뒤 2초뒤에 우승자 얼럿이 노출되는지 확인한다.', () => {
		const checkWinnerTest = () => {
			let winners = [];
			let maxPosition = 0;

			cy.get(selectors.carNamesInput).type('a,b,c,d,e');
			cy.get(selectors.carNamesSubmit).click();
			cy.get(selectors.countInput).type(5);
			cy.get(selectors.countSubmit).click();

			cy.wait(5000);

			cy.get(`${selectors.racingCarsArea} > div`)
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
					cy.get(selectors.winnerTextArea).should(
						'have.text',
						globalTexts.makeWinnerText(winners),
					);
					cy.wait(2000);
          console.log(maxPosition)
					cy.on('window:alert', (str) => {
						expect(str).to.equal(alertMsg.printWinners(winners));
					});
					cy.get(selectors.restartButton).click();
				});
		};
			checkWinnerTest();
	});
});
