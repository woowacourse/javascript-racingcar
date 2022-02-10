import { $, $$ } from '../utils/dom.js';
import Model from '../model/model.js';
import View from '../view/view.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.getCarNames();
  }

  getCarNames() {
    //  확인 버튼 이벤트 리스터
    $('#car-names-button').addEventListener('click', (e) => {
      const carNames = $('#car-names-input').value.split(',');
      console.log(carNames); //west,east,north
      //model에 데이터로 넣어주는 로직
      this.model.getCars(carNames);
    });
  }
}
