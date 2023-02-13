const MESSAGES = Object.freeze({
  carText: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  repeatNumber: "시도할 회수는 몇회인가요?\n",
  resultTitle: "\n실행 결과",
  resultEnd: "가 최종 우승했습니다,\n",
  carTextError: "[ERROR] 자동차 이름은 5자 이하로 입력해주세요.\n",
  repeatRangeError: "[ERROR] 횟수는 자연수로 입력해주세요.\n",
});

const RANDOMS = Object.freeze({
  maximumNumber: 10,
  minimumRunNumber: 4,
});

const RESULT = Object.freeze({
  run: 1,
  stay: 0,
});

const CONDITION = Object.freeze({
  carNames: /^([^,]{1,5},)*[^,]{1,5}$/,
  repeatNumber: /^[1-9]\d*$/,
});

module.exports = Object.freeze({
  MESSAGES,
  RANDOMS,
  RESULT,
  CONDITION,
});
