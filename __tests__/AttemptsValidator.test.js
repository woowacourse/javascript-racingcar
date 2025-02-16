import { ERROR } from '../src/constants/messages.js';
import attemptsValidator from '../src/validator/AttemptsValidator.js';


test.each([[-1], [0]])(
  'checkPositiveNumber함수는 시도할 횟수가 양의 정수가 아니면 에러를 띄운다',
  (attempts) => {
    expect(() => attemptsValidator(attempts)).toThrow(

      ERROR.NOT_POSITIVE_NUMBER
    );
  }
);
