import InputView from './views/InputView.js';
import { Validator } from './models/Validator.js';

class App {
	#carNames;
	#count;

	async play() {
		this.#carNames = await this.#inputCarNames();
		console.log(this.#carNames);

		this.#count = await this.#inputCountOfAttempt();
		console.log(this.#count);
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

	async #inputCountOfAttempt() {
		try {
			const count = await InputView.inputCountOfAttempt();
			Validator.validateCountOfAttempt(count);
			return count;
		} catch (error) {
			console.log(error.message);
			return await this.#inputCountOfAttempt();
		}
	}
}
export default App;
