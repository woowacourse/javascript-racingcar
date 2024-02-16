import OutputView from '../View/OutputView.js';

class Winner {
	#carNames;
	#distance;

	constructor(carNames, distance) {
		this.#carNames = carNames;
		this.#distance = distance;
	}

	decideWinner() {
		const winnerIndexArr = [];
		const maxValue = Math.max(...this.#distance);

		this.#distance.forEach((position, i) => {
			if (position === maxValue) {
				winnerIndexArr.push(i);
			}
		});

		const winnerNames = winnerIndexArr.map(e => this.#carNames[e]);
		this.showWinner(winnerNames);
		return winnerNames;
	}

	showWinner(winners) {
		OutputView.printWinners(winners);
	}
}

export default Winner;
