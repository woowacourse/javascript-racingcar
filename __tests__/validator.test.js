import Validator from '../src/validator.js';

describe('자동차 이름 검증 테스트', () => {
  test('자동차가 한개면 에러를 던진다.', () => {
    expect(() => {
      Validator.validateCarName('bun');
    }).toThrow('[ERROR] 2개 이상의 자동차 이름을 입력해야합니다.');
  });
  test('자동차 이름이 5자를 초과하면 에러를 던진다', () => {
    expect(() => {
      Validator.validateCarName('123456,4567');
    }).toThrow('[ERROR] 자동차의 이름은 5자 이하만 가능합니다.');
  });
});

describe('시도 횟수 검증 테스트', () => {
  test('시도 횟수가 음수면 에러를 던진다', () => {
    expect(() => {
      Validator.validateCount('-1');
    }).toThrow('[ERROR] 시도 횟수는 양수여야 합니다.');
  });

  test('시도 횟수가 숫자가 아니면 에러를 던진다', () => {
    expect(() => {
      Validator.validateCount('abc');
    }).toThrow('[ERROR] 횟수는 숫자만 입력하실 수 있습니다.');
  });
});
