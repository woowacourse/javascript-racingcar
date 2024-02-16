import { makeRandomNum } from '../Utils/MissionUtils.js';
import OutputView from '../View/OutputView.js';

class GameController {
	#carList;
	#tryNumber;
	#carsPosition;
	#names;

	constructor(carList, tryNumber, names) {
		this.#carList = carList;
		this.#tryNumber = tryNumber;
		this.#names = names;
		this.#carsPosition = Array.from(names).fill(0);
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
		const carNameLength = this.#names.length;
		for (let i = 0; i < carNameLength; i++) {
			//전진시 해당 인원 인덱스의 카운터 추가
			if (this.isForward()) {
				this.#carsPosition[i]++;
			}
		}
	}

	showOneTurnResult() {
		this.#carList.forEach((_, i) => {
			const forwardResult = this.isForward();
			if (forwardResult) {
				this.#carsPosition[i]++;
			}
		});
	}

	playOneTurnResult() {
		this.#carList.forEach((car, i) => {
			OutputView.printNameAndResult(car, this.#carsPosition, i);
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
		const maxValue = Math.max(...this.#carsPosition);

		this.#carsPosition.forEach((position, i) => {
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
