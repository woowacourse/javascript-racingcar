import { COUNT } from './common/constants.js'

export default class Car {
  constructor(name) {
    this.name = name;
    this.count = COUNT.DEFAULT;
  }
}
