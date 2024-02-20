import { GAME } from '../Constant/Constant.js';
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
		this.endRaceAndShowResult(carList, raceResult);
	}

	endRaceAndShowResult(carList, raceResult) {
		this.showRaceResult(raceResult);

		const distance = carList.getDistance();
		const carNames = carList.getNames();
		const winner = new Winner(carNames, distance);
		const raceWinners = winner.decideWinnerAndReturnNames();
		this.showWinner(raceWinners);
	}

	makeCarList(carNames) {
		return new CarList(carNames);
	}

	playAllTurn(carList, tryNumber) {
		const raceResult = [];
		const carNames = carList.getNames();

		for (let i = 0; i < tryNumber; i++) {
			const forwardArr = this.getOneTurnIsForwardArr(carNames);
			carList.moveCarsByIsForward(forwardArr);
			const oneTurnResult = carList.getCarNameAndDistanceArr();
			raceResult.push(oneTurnResult);
		}

		return raceResult;
	}

	getOneTurnIsForwardArr(carNames) {
		return carNames.map(() => {
			const randomNumber = makeRandomNum(1, 9);
			return this.isForward(randomNumber);
		});
	}

	isForward(number) {
		return number >= GAME.FORWARD_MIN_NUM;
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

	showWinner(winners) {
		OutputView.printWinners(winners);
	}
}

export default RaceController;
