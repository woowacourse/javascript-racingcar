import { $, $$ } from '../utils/dom.js';
import Model from '../model/model.js';
import View from '../view/view.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import Validator from '../validator/validator.js';

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
      const carNames = $('#car-names-input')
        .value.split(',')
        .map((carName) => carName.trim());

      // carNames validation
      if (Validator.isInValidCarNamesInput(carNames)) {
        return;
      }
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
      this.model.carPosition = new Array(this.model.carNames.length).fill(0);
    });
  }

  gameStart() {
    // 자동차 이름이 먼저 렌더링
    const carNames = this.model.carNames;
    this.view.renderCarNames(carNames);

    // 결과에 따라서 한줄씩 화살표 반복 출력
    // 랜덤 0 ~ 9까지 숫자를 구하는 메서드 필요 ok
    // 총 시도횟수 만큼 반복
    for (let i = 0; i < this.model.racingCount; i++) {
      this.model.carNames.map((carNames, idx) => {
        if (getRandomNumber() >= 4) {
          // 랜덤 값이 4 이상인 경우 모델에서 position++ (조건 체크)
          this.model.carPosition[idx]++;
        }
      });
    }

    // progress 출력 로직 작성
    this.displayProgress();

    console.log(this.model.carNames, this.model.carPosition);
    // 최종 우승자 출력 (우승자를 구하는 메서드)
    this.displayWinner();
    // 다시하기 버튼 렌더링
    this.view.renderRestartButton();
    this.gameRestart();
  }

  // progress 출력 로직 작성
  displayProgress() {
    this.view.renderProgress(this.model.carPosition);
  }

  getWinner() {
    const carPosition = this.model.carPosition;
    const MAX = Math.max.apply(null, [...carPosition]);
    const arr = this.model.carNames.filter((car, idx) => {
      return this.model.carPosition[idx] === MAX;
    });
    return arr.join(', ');
  }

  displayWinner() {
    this.view.renderWinner(this.getWinner());
  }

  // 다시하기 버튼을 눌렀을 때
  gameRestart() {
    $('#game-restart').addEventListener('click', (e) => {
      this.view.renderInitial();
      this.model = new Model();
    });
  }
}
