// 내가 생각하는 빌드

// 1. 처음에 다들 숨김
// 2. 자동차 이름입력하고 확인 -> 횟수창 나옴
// 3. 횟수창에서 누르면 -> 게임 시작됨
// 4. 몇초 있다가 최종 우승자 결과 확인됨 + 다시 시작하기 버튼 나옴
// 5. 다시 시작하기 버튼 누르면
//    - 자동차 이름, 횟수 초기화됨
//    - 결과 View 다시 hidden

import $ from './utils/dom.js';
import { SELECTORS } from './constants/constants.js';
import handleCarNamesSubmit from './input/handleCarNames.js';
import handleRacingCountSubmit from './input/handleRacingCount.js';

function init() {
  $(SELECTORS.CAR_NAMES_BUTTON).addEventListener('click', handleCarNamesSubmit);
  $(SELECTORS.RACING_COUNT_BUTTON).addEventListener('click', handleRacingCountSubmit);
}

export default function racingCarGame() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  racingCarGame();
});
