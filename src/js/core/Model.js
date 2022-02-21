import { cloneObject } from '../utils/utils.js';

export default class Model {
  state;

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  generatePayload() {
    return cloneObject(this.state);
  }
}
