import InputView from './views/InputView.js';
import { Validator } from './models/Validator.js';
import OutputView from './views/OutputView.js';
import ScoreBoard from './models/ScoreBoard.js';
import Game from './models/Game.js';
import generateRandomNumber from './utils/generateRandomNumber.js';

class App {
	#scoreBoard;
	#count;
	#gameResult;

	async play() {
		await this.#inputCarNames();
		await this.#inputCountOfAttempt();
		this.gameStart();
		this.printGameResult();
	}

	gameStart() {
		const game = new Game(this.#scoreBoard, this.#count);
		this.#gameResult = game.getGameResult();
	}

	printGameResult() {
		OutputView.printStartGame();
		OutputView.printResult(this.#gameResult);
		OutputView.printWinner(this.#gameResult, this.#count);
	}

	async #inputCarNames() {
		try {
			const carNames = await InputView.inputCarNames();
			const scoreBoard = new ScoreBoard(carNames);
			this.#scoreBoard = scoreBoard.getScoreBoard();
		} catch (error) {
			console.error(error.message);
			return await this.#inputCarNames();
		}
	}

	async #inputCountOfAttempt() {
		try {
			const count = await InputView.inputCountOfAttempt();
			Validator.validateCountOfAttempt(count);
			this.#count = count;
		} catch (error) {
			console.log(error.message);
			return await this.#inputCountOfAttempt();
		}
	}
}
export default App;
