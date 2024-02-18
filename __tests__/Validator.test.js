import carNamesValidator from '../src/validators/carNamesValidator';
import tryCountValidator from '../src/validators/tryCountValidator';
import { ERROR_MESSAGES } from '../src/constants/car-race';

describe('자동차 이름 유효성 검사', () => {
  it('자동차 이름이 5글자 이상이면 에러가 발생한다.', () => {
    const input = ['bingbong'];

    expect(() => carNamesValidator.validateLength(input)).toThrow(
      ERROR_MESSAGES.carNameLength,
    );
  });

  it('자동차 이름이 중복되면 에러가 발생한다.', () => {
    const input = ['bong', 'bong'];

    expect(() => carNamesValidator.validateUniqueness(input)).toThrow(
      ERROR_MESSAGES.carNameUniqueness,
    );
  });
});

describe('시도 횟수 유효성 검사', () => {
  it('시도 횟수가 1 이상의 숫자가 아니면 에러가 발생한다.', () => {
    const input = 0;

    expect(() => tryCountValidator.validate(input)).toThrow(
      ERROR_MESSAGES.tryCount,
    );
  });
});
