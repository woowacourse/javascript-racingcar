export const Messages = {
  READ_CAR_NAMES: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  READ_RACE_STEP: '시도할 회수는 몇회인가요?',
  PRINT_WINNERS: '{0}가 최종 우승했습니다.',
  PRINT_RACE_STATE_TITLE: '실행 결과',
};

export const ErrorMessages = {
  PREFIX: '[ERROR]',
  CAR_NAME_LENGTH_LIMIT: '자동차의 이름은 {0}글자 이하여야 합니다.',
  CAR_NAME_MUST_DISTINCT: '자동차의 이름은 서로 중복되지 않아야 합니다',
  RACE_STEP_NOT_INTEGER: '정수를 입력해야 합니다.',
  RACE_STEP_NOT_POSITIVE: '0보다 큰 양수를 입력해야 합니다.',
};

/**
 * @param {string} templateMessage
 * @param {...string} args
 * @returns {string} 템플릿에 값을 채운 완성된 메세지를 반환합니다.
 */
export function format(templateMessage, ...args) {
  return args.reduce(
    (message, arg, index) => message.replaceAll(`{${index}}`, arg),
    templateMessage,
  );
}
