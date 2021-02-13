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
    this.cars = new State([]);
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
    }).render();
  }

  race = () => {
    for (let i = 1; i < this.raceTimes.value; i++) {
      setTimeout(this.processRaceOnce, GAME_SETTING.PROCESS_TERM * i);
    }
    setTimeout(this.processRaceOnce, GAME_SETTING.PROCESS_TERM * this.raceTimes.value, true);
  };

  processRaceOnce = (isFinished) => {
    this.cars.value.forEach(car => car.process());
    this.mountGameProcess(isFinished);
  }

  #determineWinners() {
    let maxPosition = Math.max(...this.cars.value.map(car => car.position));
    this.cars.value.forEach(car => {
      if (car.position === maxPosition) {
        this.winners.push(car.name);
      }
    });
  }

  mountGameProcess = (isFinished) => {
    if (!isFinished) isFinished = false;
    this.#childComponents.gameProcess = new GameProcess(document.querySelector('#game-process-component'), {
      cars: this.cars,
      isFinished: isFinished,
    }).render();
  }

  mountGameResult = () => {
    this.#childComponents.gameResult = new GameResult(document.querySelector('#game-result-component'), {
      winners: this.winners,
      reset: this.reset,
    }).render();
  }

  reset = () => {
    this.#initialize();
    this.render();
  };
}
