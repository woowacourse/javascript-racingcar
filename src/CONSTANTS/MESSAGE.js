const message = Object.freeze({
  CAR_NAME_INPUT:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  MAX_TRY_COUNT_INPUT: '시도할 횟수는 몇 회인가요?',
  RESULT_OUTPUT: '실행결과',
  WINNER_OUTPUT_HEADER: '최종 우승자 : ',

  INVALID_CAR_NAME: '[ERROR] 유효한 차 이름 입력이 아님!(1~5자)',
  INVALID_MAX_TRY_COUNT:
    '[ERROR] 유효한 시도 횟수 입력이 아님!(1 이상의 십진수 숫자만 가능) ',

  DISTANCE_MARK: '-',
  PROGRESS_CONNECTION_MARK: ' : ',
  WINNER_CONNECTION_MARK: ', ',
  PROGRESS_LINE_BREAK_MARK_EACH_ROUND: '\n',
  PROGRESS_LINE_BREAK_MARK_EACH_TRY: '\n\n',
});
export default message;
