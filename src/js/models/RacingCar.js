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

  go() {
    this.state.distance += 1;
  }
}

export default RacingCar;
