class RacingGame {
  #cars = [];

  constructor(names) {
    this.#cars = names.map(name => new Car(name));
  }
}
