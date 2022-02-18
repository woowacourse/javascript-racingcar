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
      console.error(e);
      alert(e.message);
    }
  }

  onRacingCountSubmit() {
    const racingCount = this.form.getRacingCount();
    try {
      this.model.updateRacingCount(racingCount);
      this.form.resetRacingCountInput(this.model.getRacingCount());
      this.startGame();
    } catch (e) {
      console.error(e);
      alert(e.message);
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
    for (let i = 0; i < this.model.getRacingCount(); i += 1) {
      this.model.tryMoveCars();
      this.screen.renderDistances(this.model.getCars());
    }
    this.endGame();
  }

  endGame() {
    this.resultView.show();
    this.resultView.renderWinners(this.model.findWinners());
    this.form.enableSubmit(); // 게임이 끝나면 다시 입력 가능하도록 한다
  }

  restartGame() {
    this.model.reset();
    this.form.reset();
    this.screen.reset();
    this.resultView.reset();
  }
}

export default RacingCarGameController;
