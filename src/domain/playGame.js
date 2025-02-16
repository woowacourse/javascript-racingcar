import pipe from "../utils/pipe.js";
import playRound from "./playRound.js";

/**
 * 자동차 초기화
 */
const initializeCars = (carNames) =>
  carNames.map((name) => ({ name, count: 0 }));

/**
 * 라운드별 자동차 상태를 history 배열에 저장
 * @param {number} rounds
 * @returns {(cars: Object[]) => Object[][]} 라운드별 기록을 담은 배열 반환
 */
const runRounds = (rounds) => (cars) =>
  Array.from({ length: rounds }).reduce(
    (history, _) => [...history, playRound(history.at(-1))], // 마지막 결과 기반으로 다음 상태 추가
    [cars]
  );

/**
 * 게임 실행
 */
const playGame = (carNames, rounds) =>
  pipe(initializeCars, runRounds(rounds))(carNames);

export default playGame;
