const MOVE_FORWARD = 4;

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(moveCondition) {
    if (moveCondition >= MOVE_FORWARD) {
      this.position += 1;
      return;
    }
  }
}
