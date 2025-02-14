import { systemSetting } from './systemSetting.js';

export const ERROR_MESSAGE = {
  HAS_EMPTY_NAME: '공백인 이름이 존재합니다. 다시 입력해주세요.',
  DUPLICATE_NAME: '중복인 이름이 존재합니다. 다시 입력해주세요.',
  NAME_TOO_LONG: `이름이 너무 깁니다. 이름은 ${systemSetting.MAX_NAME_LENGTH}자 까지 입력할수 있어요. 다시 입력해주세요.`,
  NOT_INTEGER: '횟수는 정수만 입력할수 있습니다. 다시 입력해주세요.',
  NOT_POSITIVE: '양수만 입력할 수 있습니다. 다시 입력해주세요.',
};
