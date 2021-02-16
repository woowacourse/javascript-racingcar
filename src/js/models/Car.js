export default class Car {
  constructor(name) {
    this._name = name;
    this._position = 0;
    this._isWinner = false;
    this._isMoving = false;
  }

  get name() {
    return this._name;
  }
  
  get position() {
    return this._position;
  }

  get isWinner() {
    return this._isWinner;
  }

  move() {
    const randNumber = Math.random() * 10;
    if (randNumber >= 4) {
      this._position++;
      this._isMoving = true;
    } else {
      this._isMoving = false;
    }
  }

  get isMoved() {
    return this._isMoving;
  }

  wins() {
    this._isWinner = true;
  }
}
