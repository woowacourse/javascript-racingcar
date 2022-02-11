import RacingGame from './models/RacingGame.js';
import RacingGameView from './RacingGameView.js';
import nameStringToArray from './utils/nameStringToArray.js';

class App {
  constructor() {
    this.View = new RacingGameView();
    this.RacingGame = new RacingGame();

    /*
    this.$carNameButton = $('#car-name-button');
    this.$raceTimeButton = $('#race-time-button');

    this.$carNameButton.addEventListener(
      'click',
      this.handleCarName.bind(this),
    );
    this.$raceTimeButton.addEventListener(
      'click',
      this.handleRaceTime.bind(this),
    ); */

    this.bindDefaultEvent();
    this.init();
  }

  init() {
    this.RacingGame.init();
  }

  bindDefaultEvent() {
    this.View.bindCarNameSubmit(this.handleCarNameInput.bind(this));
    this.View.bindRaceTimeInputSubmit(this.handleRaceTimeInput.bind(this));
  }

  handleCarNameInput({ carNameInput }) {
    this.RacingGame.carListPush(nameStringToArray(carNameInput));
  }

  handleRaceTimeInput({ raceTimeInput }) {
    this.RacingGame.round = raceTimeInput;
    this.handleGamePlay();
  }

  handleGamePlay() {
    for (let i = 1; i < this.RacingGame.round; i += 1) {
      try {
        this.RacingGame.play();
      } catch (err) {
        alert(err);
        break;
      }
    }

    this.handleWinnerDisplay();
  }

  handleWinnerDisplay() {
    this.View.bindWinnerDiv(this.RacingGame.winner);
  }

  handleReplayGame() {
    // this.View.
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
