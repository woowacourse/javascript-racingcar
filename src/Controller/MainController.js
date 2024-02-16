import CarList from '../Domain/CarList.js';
import InputView from '../View/InputView.js';
import GameController from './GameController.js';

class MainController {
	async play() {
		const names = await InputView.askCarNames();
		const tryNumber = await InputView.askTryNumber();

		const carList = new CarList(names);
		const gameController = new GameController(carList, tryNumber, names);
		gameController.playAllTurn();
	}
}

export default MainController;
