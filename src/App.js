import InputView from './views/InputView.js';
import { Validator } from './models/Validator.js';

class App {
	#carNames;
	#count;

	async play() {
		this.#carNames = await this.#inputCarNames();
		console.log(this.#carNames);

		// await InputView.inputCountOfAttempt();
	}

	async #inputCarNames() {
		try {
			const carNames = await InputView.inputCarNames();
			Validator.validateCarNames(carNames);
			return carNames;
		} catch (error) {
			console.error(error.message);
			return await this.#inputCarNames();
		}
	}
}
export default App;
