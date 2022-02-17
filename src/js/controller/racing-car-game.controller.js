import RacingPrepareForm from '../views/racing-prepare-form.view.js';
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
    this.onSubmitCarNames = this.onSubmitCarNames.bind(this);
    this.onSubmitRacingCount = this.onSubmitRacingCount.bind(this);
  }

  bindViews() {
    this.form = new RacingPrepareForm(this);
    this.screen = new RacingScreen(this);
  }

  onSubmitCarNames() {
    const carNames = this.form.getCarNames();
    try {
      this.model.updateCars(carNames);
      this.form.resetCarNameInput(this.model.getCarNames());
      this.form.showRacingCountFieldset();
    } catch (e) {
      alert(e.message);
    }
  }

  onSubmitRacingCount() {
    const racingCount = this.form.getRacingCount();
    try {
      this.model.updateRacingCount(racingCount);
      this.form.resetRacingCountInput(this.model.getRacingCount());
      this.form.disableSubmit();
      this.startGame();
    } catch (e) {
      alert(e.message);
    }
  }

  startGame() {
    this.screen.showScreen();
    this.screen.renderLanes(this.model.getCars());
    this.screen.bindDistances(); // 효율적으로 view를 업데이트 하기 위해서 필요하다
    for (let i = 0; i < this.model.getRacingCount(); i += 1) {
      this.model.tryMoveCars();
      this.screen.renderDistances(this.model.getCars());
    }
  }
}

export default RacingCarGameController;
