/**
 * @module RacingWinnerRecorder
 * 자동차 경주 게임의 우승자를 기록하는 도메인 모델 객체
 */
class RacingWinnerRecorder {
  /**
   * @param {import("../../types/jsDoc.js").RacingTurnResult} finalRacingResults - 최종 경주 결과
   * @returns {string[]} 자동차 경주 우승자들이 담긴 문자열 배열
   */
  createRacingWinners(finalRacingResults) {
    const maxMoveCount = this.#calculateMaxMoveCount(finalRacingResults);
    const racingWinners = this.#extractRacingWinnersByMaxMoveCount(finalRacingResults, maxMoveCount);

    return racingWinners;
  }

  /**
   * @param {import("../../types/jsDoc.js").RacingTurnResult} finalRacingResults - 최종 경주 결과
   * @returns {number} 최대 이동 거리
   */
  #calculateMaxMoveCount(finalRacingResults) {
    const moveCounts = finalRacingResults.map(({ moveCount }) => moveCount);

    return Math.max(...moveCounts);
  }

  /**
   * @param {import("../../types/jsDoc.js").RacingTurnResult} finalRacingResults - 최종 경주 결과
   * @param {number} maxMoveCount - 최대 이동 거리
   * @returns {string[]} 최대 이동 거리를 가진 자동차의 이름 들의 배열
   */
  #extractRacingWinnersByMaxMoveCount(finalRacingResults, maxMoveCount) {
    return finalRacingResults.filter(({ moveCount }) => moveCount === maxMoveCount).map(({ carName }) => carName);
  }
}

export default RacingWinnerRecorder;
