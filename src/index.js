import CarController from './Model/CarController.js';
import CarList from './Model/CarList.js';
import InputView from './View/InputView.js';

class App {
	async play() {
		const carArray = await InputView.askCarNames();
		const tryNumber = await InputView.askTryNumber();

		const carController = new CarController(carArray, tryNumber);
		carController.playAllTurn();
	}
}

const app = new App();
await app.play();

export default App;
