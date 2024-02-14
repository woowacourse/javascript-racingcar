import CommonValidator from '../src/validator/CommonValidator';

describe('공통 유효성 테스트', () => {
  test('입력 공백이 들어오면 에러가 발생한다.', () => {
    const input = '';
    expect(() => CommonValidator.inputEmpty(input)).toThrow(
      '[ERROR] 입력은 공백이 될 수 없습니다.'
    );
  });
});
