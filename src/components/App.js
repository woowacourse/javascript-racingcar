import UserInput from './UserInput.js';
import GameProcess from './GameProcess.js';
import GameResult from './GameResult.js';
import State from '../library/core/State.js';
import Page from '../library/core/Page.js';
import { GAME_SETTING } from '../library/utils/constant.js';

export default class App extends Page {
  cars;
  raceTimes;
  winners;
  #childComponents = {};

  constructor($target, props) {
    super($target, props);
    this.#initialize();
  }

  #initialize() {
    this.winners = [];
    this.cars = [];
    this.raceTimes = new State(null);
  }

  _mountTemplate() {
    this.$target.innerHTML = `
      <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
      <div class="d-flex justify-center mt-5">
        <div id="user-input-component"></div>
      </div>
      <div id="game-process-component" class="d-flex justify-center mt-5"></div>
      <div id="game-result-component" class="d-flex justify-center mt-5"></div>
    `;
  }

  _mountChildComponents() {
    this.mountUserInput();
  };

  mountUserInput = () => {
    this.#childComponents.userInput = new UserInput(document.querySelector('#user-input-component'), {
      cars: this.cars,
      raceTimes: this.raceTimes,
      mountGameProcess: this.mountGameProcess,
      race: this.race,
    });
    this.#childComponents.userInput.render();
  }

  race = () => {
    console.log(this.cars);
    for (let i = 1; i <= this.raceTimes.value; i++) {
      const isFinished = i === this.raceTimes.value;
      setTimeout(this.processRaceOnce, GAME_SETTING.PROCESS_TERM * i, isFinished);
    }
  };

  processRaceOnce = (isFinished) => {
    this.cars.forEach(car => car.value.process());
    this.mountGameProcess(isFinished);
    if (isFinished) {
      this.#determineWinners();
      this.mountGameResult();
      setTimeout(alert, GAME_SETTING.RENDER_RESULT_TERM,
        this.#makeWinnerAlertMessage());
    }
  }

  #determineWinners() {
    let maxPosition = Math.max(...this.cars.map(car => car.value.position));
    this.cars.forEach(car => {
      if (car.value.position === maxPosition) {
        this.winners.push(car.value.name);
      }
    });
  }

  #makeWinnerAlertMessage() {
    return `레이싱 게임의 우승자 ${this.winners.join(",")}님! 축하드립니다 🎊`;
  }

  mountGameProcess = (isFinished) => {
    if (!isFinished) isFinished = false;
    this.#childComponents.gameProcess = new GameProcess(document.querySelector('#game-process-component'), {
      cars: this.cars,
      isFinished,
    });
    this.#childComponents.gameProcess.render();
  }

  mountGameResult = () => {
    this.#childComponents.gameResult = new GameResult(document.querySelector('#game-result-component'), {
      winners: this.winners,
      reset: this.reset,
    });
    this.#childComponents.gameResult.render();
  }

  reset = () => {
    this.#initialize();
    this.render();
  };
}
