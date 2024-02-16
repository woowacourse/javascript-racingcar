import CarList from '../Domain/CarList';
import CarController from './CarController';
import InputView from '../View/InputView';

class MainController {
	async play() {
		const names = await InputView.askCarNames();
		const tryNumber = await InputView.askTryNumber();

		const carList = new CarList(names);
		const carController = new CarController(carList, tryNumber);
		carController.playAllTurn();
	}
}

export default MainController;
