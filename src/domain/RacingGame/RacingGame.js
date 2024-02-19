import Car from '../Car/Car.js';

/**
 * @module RacingGame
 * 시도 횟수 만큼의 자동차 이동 결과를 반환하는 역할인 도메인 모델 객체
 */
class RacingGame {
  #tryCount;

  /**
   * @type {Car[]}
   */
  #cars;

  /**
   * @param {import("../../types/jsDoc.js").UserInputDetails} userInputDetails - 경주에 참가할 자동차의 이름들과 시도 횟수를 포함하는 객체
   */
  constructor({ racingCarNames, tryCount }) {
    this.#tryCount = tryCount;
    this.#cars = racingCarNames.map((carName) => new Car(carName));
  }

  /**
   * @param {number[][]} randomMoveCounts - 각 턴마다 각 자동차 들의 랜덤 이동 값을 나타내는 2차원 배열
   * @returns {import("../../types/jsDoc.js").RacingResult} 자동차 경주 결과
   */
  startRace(randomMoveCounts) {
    const racingResult = Array.from({ length: this.#tryCount }, (_, racingTurn) =>
      this.#updateRacingResult(racingTurn, randomMoveCounts),
    );

    return racingResult;
  }

  /**
   * @param {number} racingTurn - 현재 진행 중인 자동차 경주 턴
   * @param {number[][]} randomMoveCounts - 각 턴마다 각 자동차 들의 랜덤 이동 값을 나타내는 2차원 배열
   * @returns {import("../../types/jsDoc.js").RacingTurnResult} 현재 턴에서 이동 횟수가 업데이트 된 자동차 정보의 배열
   */
  #updateRacingResult(racingTurn, randomMoveCounts) {
    const partialRacingResult = this.#cars.map((car, carIndex) => {
      const randomMoveCount = randomMoveCounts[racingTurn][carIndex];

      const updatedCarDetail = car.move(randomMoveCount);

      return updatedCarDetail;
    });

    return partialRacingResult;
  }
}

export default RacingGame;
