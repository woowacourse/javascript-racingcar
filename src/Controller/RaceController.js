import CarList from '../Domain/CarList.js';
import Winner from '../Domain/Winner.js';
import { makeRandomNum } from '../Utils/MissionUtils.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';

class RaceController {
	async startRace() {
		const carNames = await InputView.askCarNames();
		const tryNumber = await InputView.askTryNumber();

		const carList = this.makeCarList(carNames);
		const raceResult = this.playAllTurn(carList, tryNumber);
		this.showRaceResult(raceResult);

		const distance = carList.getDistance();
		const winner = new Winner(carNames, distance);
		winner.decideWinner();
	}

	makeCarList(carNames) {
		return new CarList(carNames);
	}

	playAllTurn(carList, tryNumber) {
		const raceResult = [];

		for (let i = 0; i < tryNumber; i++) {
			this.playOneTurn(carList);
			const oneTurnResult = this.makeOneTurnResult(carList);
			raceResult.push(oneTurnResult);
		}

		return raceResult;
	}

	playOneTurn(carList) {
		const carNames = carList.getNames();

		carNames.forEach((_, i) => {
			const forwardResult = this.isForward();
			if (forwardResult) {
				carList.move(i);
			}
		});
	}

	makeOneTurnResult(carList) {
		const carNames = carList.getNames();

		const raceResult = carNames.map((name, i) => {
			const distanceArr = carList.getDistance();
			const targetDistance = distanceArr[i];
			return [name, targetDistance];
		});
		return raceResult;
	}

	showRaceResult(raceResult) {
		raceResult.forEach(oneTurn => {
			this.showOneTurnResult(oneTurn);
			OutputView.printBlank();
		});
	}

	showOneTurnResult(oneTurn) {
		oneTurn.forEach(carResult => {
			const [name, result] = carResult;
			OutputView.printNameAndResult(name, result);
		});
	}

	isForward() {
		const random = makeRandomNum(0, 9);
		if (random >= 4) {
			return true;
		}
		return false;
	}
}

export default RaceController;
