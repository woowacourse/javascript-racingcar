import CarList from './Model/CarList.js';
import InputView from './View/InputView.js';

class App {
	async play() {
		const carArray = InputView.askCarNames();
	}
}

const app = new App();
await app.play();

export default App;
