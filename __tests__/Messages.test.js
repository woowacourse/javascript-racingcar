import { format } from '../src/constants/Messages';

describe('Messages 클래스에 대한 테스트', () => {
  test.each([
    [
      '{0}도 좋지만 {1}도 좋고... 일단 {0}로 선택해야지',
      ['Apple', 'Banana'],
      'Apple도 좋지만 Banana도 좋고... 일단 Apple로 선택해야지',
    ],
    [
      '네 가지 문제점: {0}, {1}, {2}, {3}',
      ['Error', 'AppError', 'CommonError', 'UnexpectedError'],
      '네 가지 문제점: Error, AppError, CommonError, UnexpectedError',
    ],
  ])('format 함수가 인자를 받아 메세지를 잘 만드는지', (templateMessage, args, expected) => {
    const message = format(templateMessage, ...args);

    expect(message).toBe(expected);
  });
});
