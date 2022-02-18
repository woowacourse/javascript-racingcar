import GAME_SETTING from '../constants/setting.js';

export default class RacingCarInstance {
  constructor(inputName) {
    this._state = {
      name: inputName,
      distance: 0,
    };
  }

  get name() {
    return this._state.name;
  }

  get distance() {
    return this._state.distance;
  }

  go() {
    this._state.distance += GAME_SETTING.DISTANCE_NUMBER;
  }
}
