import CarValidator from '../src/domain/CarValidator.js';
import TryCountValidator from '../src/domain/TryCountValidator.js';

describe('자동차 이름 유효성 테스트', () => {
  test('자동차 대수가 2대 미만이면 에러가 발생한다.', () => {
    const input = ['파슬리'];
    expect(() => CarValidator.validateCount(input)).toThrow();
  });

  test.each(['', '파슬리쑤쑤쿠키썬데이'])(
    '자동차 이름이 1자 미만 또는 5자 초과면 에러가 발생한다.',
    (input) => {
      expect(() => CarValidator.validateNameRange(input)).toThrow();
    }
  );

  test('자동차 이름이 중복되면 에러가 발생한다.', () => {
    const input = ['파슬리', '파슬리', '쑤쑤'];
    expect(() => CarValidator.validateNameDuplicate(input)).toThrow();
  });
});

describe('경주 횟수 유효성 테스트', () => {
  test.each(['ㄱ', 'a', '0', '-1', '5.5', '&'])(
    '경주 횟수가 자연수가 아니라면 에러가 발생한다.',
    (input) => {
      expect(() => TryCountValidator.validateNaturalNumber(Number(input))).toThrow();
    }
  );
});
