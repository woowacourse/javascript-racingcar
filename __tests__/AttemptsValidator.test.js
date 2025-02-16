import AttemptsValidator from '../src/domain/validator/AttemptsValidator';

test.each([
  [-1],
  [0],
])('시도할 횟수가 양의 정수가 아니면 에러를 띄운다', (attempts) => {
  expect(() => AttemptsValidator.checkPositiveNumber(attempts)).toThrow(Error);
});
