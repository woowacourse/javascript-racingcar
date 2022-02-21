export default class Cars {
  #list = [];

  init() {
    this.#list = [];
  }

  getCars() {
    return this.#list;
  }

  setCars(cars) {
    this.#list = cars;
  }
}
