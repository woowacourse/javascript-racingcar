import Validation from '../src/utils/Validation';
import { ERROR_MESSAGE } from '../src/constants';

const TOO_SHORT_NAME = ''

const TOO_LONG_NAME = 'pobipobi'

describe('사용자 입력 유효성 검사', () => {
  test.each([[['pobi', 'jun', TOO_SHORT_NAME]], [[TOO_LONG_NAME, 'jun', 'cron']]])(
    '자동차 이름 길이 유효성 검사',
    (nameArray) => {
      expect(() => Validation.carNamesValidate(nameArray)).toThrow(
        ERROR_MESSAGE.CAR_NAME_INPUT_ERROR.NOT_IN_RANGE
      );
    }
  );
  test.each([-1, -999999, 0.232, 21.5])(
    '시도 횟수 숫자 유효성 검사',
    (nameArray) => {
      expect(() => Validation.tryCountValidate(nameArray)).toThrow(
        ERROR_MESSAGE.TRY_COUNT_INPUT_ERROR.SHOULD_BE_POSITIVE
      );
    }
  );
});
