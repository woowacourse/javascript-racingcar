import GAME_SETTING from '../constants/setting.js';

export default class RacingCarInstance {
  #state;

  constructor(inputName) {
    this.#state = {
      name: inputName,
      distance: 0,
    };
  }

  get name() {
    return this.#state.name;
  }

  get distance() {
    return this.#state.distance;
  }

  go() {
    this.#state.distance += GAME_SETTING.DISTANCE_NUMBER;
  }
}
