const MESSAGE = Object.freeze({
  positionIndex: "-",
  championSeparator: ", ",

  readCarNames:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  readAttempt: "시도할 횟수는 몇 회인가요?\n",
  attemptTitle: "\n실행 결과",
  winnerTitle: "최종 우승자",

  carStatusListFormat: (carStatusList) => {
    return carStatusList
      .map(
        (car) => `${car.name} : ${MESSAGE.positionIndex.repeat(car.position)}`
      )
      .join("\n");
  },
});

export default MESSAGE;
