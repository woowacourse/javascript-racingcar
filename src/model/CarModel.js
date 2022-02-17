import { INIT } from '../constants/constants.js';

export default class CarModel {
  constructor(name) {
    this.name = name;
    this.position = INIT.POSITION;
  }
}
