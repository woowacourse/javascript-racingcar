const MESSAGE = Object.freeze({
  carNameInput:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  tryCountInput: "시도할 횟수는 몇 회인가요?\n",
  resultOutput: "실행결과",
  winnerOutputHeader: "최종 우승자 : ",

  invalidCarName: "[ERROR] 유효한 차 이름 입력이 아님!(1~5자)",
  invalidTryCount:
    "[ERROR] 유효한 시도 횟수 입력이 아님!(1 이상의 십진수 숫자만 가능) ",

  distanceMark: "-",
  resultConnectionMark: " : ",
  winnerConnectionMark: ", ",
  resultLineBreakMarkInRound: "\n",
  resultLineBreakMarkInRace: "\n\n",
});
export default MESSAGE;
