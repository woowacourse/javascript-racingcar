export default class Car {
  constructor(name) {
    this.name = name;
    this.forward = 0;
  }

  move = () => {
    this.forward += 1;
  };
}
