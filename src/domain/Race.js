import Car from './Car';

class Race {
  #attemptNum;

  constructor(attemptNum) {
    this.#validateNum(attemptNum);
    this.#attemptNum = Number(attemptNum);
  }

  #validateNum(attemptNum) {
    if (!Number.isInteger(Number(attemptNum))) throw new Error('[ERROR] 정수를 입력해 주세요.\n');

    if (Number(attemptNum) <= 0) throw new Error('[ERROR] 0 이상의 정수를 입력해 주세요.\n');
  }

  // raceStart(cars) {
  //   const result = [];

  //   for (let i = 0; i < this.#attemptNum; i++) {
  //     cars.moveCars();
  //     // result에 결과 추가
  //   }
  //   // return result
  // }

  get attemptNum() {
    return this.#attemptNum;
  }
}

export default Race;
