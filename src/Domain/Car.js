import { makeRandomNum } from '../Utils/MissionUtils.js';

class Car {
	playOneTurn(carNames, resultCounter) {
		const carNameLength = carNames.length;
		for (let i = 0; i < carNameLength; i++) {
			const randomNumber = makeRandomNum(0, 9);
			if (this.isForward(randomNumber)) {
				resultCounter[i]++;
			}
		}
	}

	isForward(randomNumber) {
		if (randomNumber >= 4) {
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
}

export default Car;
