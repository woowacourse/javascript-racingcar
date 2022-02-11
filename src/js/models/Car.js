import { INIT_CAR_FORWARD } from "../utils/constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.forward = INIT_CAR_FORWARD;
  }

  move = () => {
    this.forward += 1;
  };
}
