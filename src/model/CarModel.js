export default class CarModel {
  position;
  name;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    this.position++;
  }
}
