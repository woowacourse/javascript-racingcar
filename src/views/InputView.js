import Console from '../utils/console.js';

import { INPUT_MESSAGE } from '../constants/messages/messages.js';
import { SYMBOLS } from '../constants/symbols.js';

import { CommonValidator, CarNameValidator, TryCountValidator } from '../validator/index.js';

/**
 * @module InputView
 * 자동차 경주 게임에 대한 사용자 입력을 처리하는 모듈
 */
const InputView = Object.freeze({
  /**
   * @param {string} message - 사용자에게 표시할 입력 안내 메시지
   * @returns {Promise<string>} 검증된 사용자 입력 값의 Promise
   */
  async read(message) {
    const inputValue = await Console.readLineAsync(message);

    CommonValidator.check(inputValue);

    return inputValue;
  },

  /**
   * @returns {Promise<string[]>} 검증된 자동차 이름(문자열)들의 배열
   */
  async readRacingCarNames() {
    const inputRacingCarNames = await this.read(INPUT_MESSAGE.racingCar);

    CarNameValidator.check(inputRacingCarNames);

    return inputRacingCarNames.split(SYMBOLS.comma);
  },

  /**
   * @returns {Promise<number>} 검증된 시도 횟수를 숫자로 반환
   */
  async readTryCount() {
    const inputTryCount = await this.read(INPUT_MESSAGE.tryCount);

    TryCountValidator.check(inputTryCount);

    return Number(inputTryCount);
  },
});

export default InputView;
