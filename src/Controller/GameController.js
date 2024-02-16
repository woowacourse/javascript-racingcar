import { makeRandomNum } from '../Utils/MissionUtils.js';
import OutputView from '../View/OutputView.js';

class GameController {
	#carList;
	#tryNumber;

	constructor(carList, tryNumber) {
		this.#carList = carList;
		this.#tryNumber = tryNumber;
	}

	playAllTurn(names) {
		OutputView.printResultMessage();

		for (let i = 0; i < this.#tryNumber; i++) {
			this.playOneTurn(names);
			this.showOneTurnResult(names);
			OutputView.printBlank();
		}
	}

	playOneTurn(names) {
		names.forEach((_, i) => {
			const forwardResult = this.isForward();
			if (forwardResult) {
				this.#carList.move(i);
			}
		});
	}

	showOneTurnResult(names) {
		names.forEach((name, i) => {
			const distanceArr = this.#carList.getDistance();
			const targetDistance = distanceArr[i];
			OutputView.printNameAndResult(name, targetDistance);
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

export default GameController;
