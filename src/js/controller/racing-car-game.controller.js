import RacingPrepareForm from '../views/racing-prepare-form.view.js';

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
  }

  bindViews() {
    this.form = new RacingPrepareForm(this);
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
}

export default RacingCarGameController;
