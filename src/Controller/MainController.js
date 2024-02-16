import InputView from '../View/InputView.js';
import GameController from './GameController.js';
import CarList from '../Domain/CarList.js';
import Winner from '../Domain/Winner.js';

class MainController {
	async play() {
		const carNames = await InputView.askCarNames();
		const tryNumber = await InputView.askTryNumber();
		const carList = new CarList(carNames);

		const gameController = new GameController(carList, tryNumber);
		gameController.playAllTurn(carNames);

		const distance = carList.getDistance();

		const winner = new Winner(carNames, distance);
		winner.decideWinner();
	}
}

export default MainController;
