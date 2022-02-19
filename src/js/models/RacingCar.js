class RacingCar {
  constructor(name) {
    this.state = {};
    this.state.name = name;
    this.state.distance = 0;
  }

  get name() {
    return this.state.name;
  }

  get distance() {
    return this.state.distance;
  }

  get isMovedInLastRound() {
    return this.state.isMovedInLastRound;
  }

  go() {
    this.state.distance += 1;
  }
}

export default RacingCar;
