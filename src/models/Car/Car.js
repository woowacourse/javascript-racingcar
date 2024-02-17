/**
 * @module Car
 * '자동차 이동'의 역할을 수행하는 도메인 모델 객체
 */
class Car {
  static #MIN_MOVABLE_VALUE = 4;

  static #CAR_MOVE_COUNT = 1;

  /**
   * @type {import("../../types/jsDoc.js").RacingCar}
   */
  #carDetails;

  constructor(carName) {
    this.#carDetails = {
      carName,
      moveCount: 0,
    };
  }

  /**
   * @param {number} randomMoveCount - 랜덤 이동 값
   * @returns {import("../../types/jsDoc.js").RacingCar} 이동 횟수가 업데이트 된 자동차 정보
   */
  move(randomMoveCount) {
    this.#updateMoveCount(randomMoveCount);

    return { ...this.#carDetails };
  }

  /**
   * @param {number} randomMoveCount - 랜덤 이동 값
   */
  #updateMoveCount(randomMoveCount) {
    if (this.#isMovable(randomMoveCount)) {
      this.#carDetails.moveCount += Car.#CAR_MOVE_COUNT;
    }
  }

  /**
   * @param {number} randomMoveCount - 랜덤 이동 값
   * @returns {boolean} 자동차 이동 가능 여부
   */
  #isMovable(randomMoveCount) {
    return randomMoveCount >= Car.#MIN_MOVABLE_VALUE;
  }
}

export default Car;
