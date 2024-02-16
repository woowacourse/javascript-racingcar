import { makeRandomNum } from '../Utils/MissionUtils.js';
import OutputView from '../View/OutputView.js';

class GameController {
	#carList;
	#tryNumber;
	#names;

	constructor(carList, tryNumber, names) {
		this.#carList = carList;
		this.#tryNumber = tryNumber;
		this.#names = names;
	}

	playAllTurn() {
		OutputView.printResultMessage();

		for (let i = 0; i < this.#tryNumber; i++) {
			this.playOneTurn();
			this.showOneTurnResult(this.#carList);
			OutputView.printBlank();
		}

		const winnerIndexArr = this.decideWinner();
		this.showWinner(winnerIndexArr);
	}

	playOneTurn() {
		this.#names.forEach((_, i) => {
			const forwardResult = this.isForward();
			if (forwardResult) {
				this.#carList.move(i);
			}
		});
	}

	showOneTurnResult() {
		this.#names.forEach((car, i) => {
			const distance = this.#carList.getDistance();
			OutputView.printNameAndResult(car, distance, i);
		});
	}

	isForward() {
		const random = makeRandomNum(0, 9);
		if (random >= 4) {
			return true;
		}
		return false;
	}

	decideWinner() {
		const winnerIndexArr = [];
		const carDistances = this.#carList.getDistance();
		const maxValue = Math.max(...carDistances);

		carDistances.forEach((position, i) => {
			if (position === maxValue) {
				winnerIndexArr.push(i);
			}
		});

		return winnerIndexArr;
	}

	showWinner(winnerIndexArr) {
		const winners = winnerIndexArr.map(e => this.#names[e]);
		OutputView.printWinners(winners);
	}
}

export default GameController;
