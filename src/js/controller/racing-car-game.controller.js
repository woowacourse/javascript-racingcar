import {
  CAR_MOVE_DELAY,
  CELEBRATE_MESSAGE,
  CELEBRATE_MESSAGE_SHOW_DELAY,
  VALIDATION_ERROR_NAME,
} from '../constants.js';
import consoleErrorWithConditionalAlert from '../utils/console.js';
import setIntervalX from '../utils/timer.js';
import RacingPrepareForm from '../views/racing-prepare-form.view.js';
import RacingResultView from '../views/racing-result.view.js';
import RacingScreen from '../views/racing-screen.view.js';

class RacingCarGameController {
  constructor(model) {
    this.model = model;
  }

  init() {
    this.bindMethods();
    this.bindViews();
  }

  // event handler는 윈도우에서 호출하기 때문에, this를 binding해놓지 않으면
  // this가 상위 context인 window가 되어버린다
  bindMethods() {
    this.onCarNamesSubmit = this.onCarNamesSubmit.bind(this);
    this.onRacingCountSubmit = this.onRacingCountSubmit.bind(this);
    this.onRestartBtnClick = this.onRestartBtnClick.bind(this);
  }

  bindViews() {
    this.form = new RacingPrepareForm(this);
    this.screen = new RacingScreen(this);
    this.resultView = new RacingResultView(this);
  }

  onCarNamesSubmit() {
    const carNames = this.form.getCarNames();
    try {
      this.model.updateCars(carNames);
      this.form.resetCarNamesInput(this.model.getCarNames());
      this.form.showRacingCountFieldset();
    } catch (e) {
      consoleErrorWithConditionalAlert(e, VALIDATION_ERROR_NAME);
    }
  }

  onRacingCountSubmit() {
    const racingCount = this.form.getRacingCount();
    try {
      this.model.updateRacingCount(racingCount);
      this.form.resetRacingCountInput(this.model.getRacingCount());
      this.startGame();
    } catch (e) {
      consoleErrorWithConditionalAlert(e, VALIDATION_ERROR_NAME);
    }
  }

  onRestartBtnClick() {
    this.restartGame();
  }

  startGame() {
    this.form.disableSubmit();
    this.screen.show();
    this.screen.renderLanes(this.model.getCars());
    this.screen.bindDistances(); // 효율적으로 view를 업데이트 하기 위해서 필요하다
    const before = (i, car) => {
      car.tryMove();
      this.screen.showSpinner(i);
    };
    const after = (i, car) => {
      this.screen.renderDistance(i, car.distance);
      this.screen.hideSpinner(i);
    };
    const end = () => {
      this.endGame();
    };
    const cars = this.model.getCars();
    cars.forEach((car, i) => {
      setIntervalX(
        this.model.getRacingCount(),
        CAR_MOVE_DELAY,
        before.bind(null, i, car),
        after.bind(null, i, car),
        i === cars.length - 1 ? end : false // 마지막에만 end를 호출한다
      );
    });
  }

  endGame() {
    this.resultView.disableRestartBtn();
    this.resultView.renderWinners(this.model.findWinners());
    this.resultView.show();
    setTimeout(() => {
      alert(CELEBRATE_MESSAGE);
      this.resultView.enableRestartBtn();
    }, CELEBRATE_MESSAGE_SHOW_DELAY);
  }

  restartGame() {
    this.model.reset();
    this.form.reset();
    this.screen.reset();
    this.resultView.reset();
  }
}

export default RacingCarGameController;
