import { MOVING_DISTANCE, MOVING_THRESHOLD } from './constants/configurations';
import { FORWARD_DASH } from './constants/systemMessages';

class Car {
  name;
  position;

  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  move(value) {
    if (value >= MOVING_THRESHOLD) this.position += MOVING_DISTANCE;
  }

  getRacingStatus() {
    return `${this.name} : ${FORWARD_DASH.repeat(this.position)}`;
  }
}

export default Car;
