const INPUT_MESSAGE = {
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  numberOfTrials: '시도할 회수는 몇회인가요?\n',
}

const OUTPUT_MESSAGE = {
  result: '\n실행 결과',
  winner: '가 최종 우승했습니다.'
}

const ERROR_MESSAGE = {
  carNameListInRange: '[ERROR] 자동차 이름은 1글자부터 5글자 사이여야 합니다.`\n',
  carNameListDuplicated: '[ERROR] 자동차 이름 중에 중복이 있습니다. \n',
  numberOfTrials: '[ERROR] 실행 횟누는 숫자만 입력 가능합니다. \n'
}

module.exports = {INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE};