import { $, $$ } from '../utils/dom.js';
import Model from '../model/model.js';
import View from '../view/view.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.getCarNames();
    this.getRacingCount();
  }

  getCarNames() {
    //  확인 버튼 이벤트 리스터
    $('#car-names-button').addEventListener('click', (e) => {
      const carNames = $('#car-names-input').value.split(',');
      //model에 데이터로 넣어주는 로직
      this.model.getCars(carNames);
    });
  }

  getRacingCount() {
    $('#car-racing-count-button').addEventListener('click', (e) => {
      const racingCount = $('#car-racing-count-input').value;
      this.model.getRacingCount(racingCount);
    });
  }
}
