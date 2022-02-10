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
      // 밸리데이션  return;
      this.model.getRacingCount(racingCount);
      this.gameStart();
    });
  }

  gameStart() {
    // 자동차 이름이 먼저 렌더링
    const carNames = this.model.carNames;
    this.view.renderCarNames(carNames);
    // 뷰에서 자동차 이름 순서대로 렌더링

    // 결과에 따라서 한줄씩 화살표 반복 출력

    // 최종 우승자 출력 (우승자를 구하는 메서드)

    // 다시하기 버튼 렌더링
  }
}
