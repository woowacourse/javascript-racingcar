import { makeRandomNum } from '../Utils/MissionUtils.js';
import OutputView from '../View/OutputView.js';

class CarController {
	constructor(carNames, tryNumber) {
		this.carNames = carNames;
		this.tryNumber = tryNumber;
		this.resultCounter = Array.from(carNames).fill(0);
	}

	playAllTurn() {
		OutputView.printResultMessage();
		for (let i = 0; i < this.tryNumber; i++) {
			this.playOneTurn(this.carNames);
			this.playOneTurnResult(this.carNames);
			OutputView.printBlank();
		}
		const winnerIndexArr = this.decideWinner();
		this.showWinner(winnerIndexArr);
	}

	playOneTurn() {
		const carNameLength = this.carNames.length;
		for (let i = 0; i < carNameLength; i++) {
			//전진시 해당 인원 인덱스의 카운터 추가
			if (this.isForward()) {
				this.resultCounter[i]++;
			}
		}
	}

	playOneTurnResult() {
		const carNameLength = this.carNames.length;
		for (let i = 0; i < carNameLength; i++) {
			OutputView.printNameAndResult(this.carNames, this.resultCounter, i);
		}
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
		const maxValue = Math.max(...this.resultCounter);
		let idx = this.resultCounter.indexOf(maxValue);
		while (idx !== -1) {
			winnerIndexArr.push(idx);
			idx = this.resultCounter.indexOf(maxValue, idx + 1);
		}
		return winnerIndexArr;
	}

	showWinner(winnerIndexArr) {
		const winners = winnerIndexArr.map(e => this.carNames[e]);
		OutputView.printWinners(winners);
	}
}

export default CarController;
