class Car {
  position = 0;
  history = [];

  constructor(name) {
    this.name = name;
  }

  updateHistory(isMove) {
    this.position += Number(isMove);

    this.history.push(this.position);
  }
}

export default Car;
