import { makeRandomNum } from '../Utils/MissionUtils.js';
import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

class CarController {
	async play() {
		const carNames = await InputView.askCarNames();
		const tryNumber = await InputView.askTryNumber();
		const resultCounter = Array.from(carNames).fill(0);
		const object = { carNames, tryNumber, resultCounter };
		this.playAllTurn(object);
	}

	playAllTurn(object) {
		OutputView.printResultMessage();
		for (let i = 0; i < object.tryNumber; i++) {
			this.playOneTurn(object.carNames, object.resultCounter);
			this.playOneTurnResult(object.carNames, object.resultCounter);
			OutputView.printBlank();
		}
		const winnerIndexArr = this.decideWinner(object.resultCounter);
		this.showWinner(winnerIndexArr, object.carNames);
	}

	playOneTurn(carNames, resultCounter) {
		const carNameLength = carNames.length;
		for (let i = 0; i < carNameLength; i++) {
			if (this.isForward()) {
				resultCounter[i]++;
			}
		}
	}

	playOneTurnResult(carNames, resultCounter) {
		const carNameLength = carNames.length;
		for (let i = 0; i < carNameLength; i++) {
			OutputView.printNameAndResult(carNames, resultCounter, i);
		}
	}

	isForward() {
		const random = makeRandomNum(0, 9);
		if (random >= 4) {
			return true;
		}
		return false;
	}

	decideWinner(resultCounter) {
		const winnerIndexArr = [];
		const maxValue = Math.max(...resultCounter);
		resultCounter.forEach((value, index) => {
			if (value === maxValue) {
				winnerIndexArr.push(index);
			}
		});
		return winnerIndexArr;
	}

	showWinner(winnerIndexArr, carNames) {
		const winners = winnerIndexArr.map(e => carNames[e]);
		OutputView.printWinners(winners);
	}
}

export default CarController;
