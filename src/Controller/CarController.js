import Car from '../Domain/Car.js';
import carNames from '../Domain/CheckCarNames.js';
import tryNumber from '../Domain/CheckTrynumber.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';

class CarController {
	async play() {
		const carNames = await this.checkCarNames();
		const tryNumber = await this.checkTryNumber();
		const resultCounter = Array.from(carNames).fill(0);
		const object = { carNames, tryNumber, resultCounter };
		this.playAllTurn(object);
	}

	async checkCarNames() {
		const inputCarNames = await InputView.askCarNames();
		try {
			carNames.check(inputCarNames);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return await checkCarNames();
		}
		return inputCarNames;
	}

	async checkTryNumber() {
		const inputNumber = await InputView.askTryNumber();
		try {
			tryNumber.check(inputNumber);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return await scheckTryNumber();
		}
		return inputNumber;
	}

	playAllTurn(object) {
		OutputView.printResultMessage();
		for (let i = 0; i < object.tryNumber; i++) {
			new Car().playOneTurn(object.carNames, object.resultCounter);
			this.playOneTurnResult(object.carNames, object.resultCounter);
			OutputView.printBlank();
		}
		const winnerIndexArr = new Car().decideWinner(object.resultCounter);
		this.showWinner(winnerIndexArr, object.carNames);
	}

	playOneTurnResult(carNames, resultCounter) {
		const carNameLength = carNames.length;
		for (let i = 0; i < carNameLength; i++) {
			OutputView.printNameAndResult(carNames, resultCounter, i);
		}
	}

	showWinner(winnerIndexArr, carNames) {
		const winners = winnerIndexArr.map(e => carNames[e]);
		OutputView.printWinners(winners);
	}
}

export default CarController;
