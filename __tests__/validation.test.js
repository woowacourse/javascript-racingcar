import ERROR from '../src/constant/error.js';
import {
  validateCarNames,
  validateRaceCount,
} from '../src/domain/validation.js';

describe('validation', () => {
  describe('자동차 이름', () => {
    describe('에러 케이스', () => {
      test('자동차는 최소 2대 이상 참가해야 한다.', () => {
        const carNames = 'seo';

        expect(() => validateCarNames(carNames)).toThrow(ERROR.MIN_CAR_COUNT);
      });

      test('자동차는 최대 60대까지 참가 가능하다.', () => {
        const carNames =
          '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61';

        expect(() => validateCarNames(carNames)).toThrow(ERROR.MAX_CAR_COUNT);
      });

      test.each([['microsoft,seo'], ['seo,kim,']])(
        '자동차의 이름은 1자 이상 5자 이하여야 한다.',
        (caeNames) => {
          expect(() => validateCarNames(caeNames)).toThrow(ERROR.NAME_LENGTH);
        },
      );

      test('자동차의 이름이 중복되면 안된다.', () => {
        const carNames = 'seo,seo';

        expect(() => validateCarNames(carNames)).toThrow(ERROR.NAME_OVERLAP);
      });
    });

    describe('정상 케이스', () => {
      test('자동차는 최소 2대 이상 최대 60대까지 참가 가능하며, 각 자동차의 이름은 1자 이상 혹은 5자 이하여야 하고 중복되면 안된다.', () => {
        const carNames = 'seo,ohgus';

        expect(() => validateCarNames(carNames)).not.toThrow();
      });
    });
  });

  describe('경주 횟수', () => {
    describe('에러 케이스', () => {
      test('경주 시도 횟수 숫자여야 한다.', () => {
        expect(() => validateRaceCount('w')).toThrow(ERROR.RACE_COUNT_NUMBER);
      });
      test('경주 시도 횟수 정수여야 한다.', () => {
        expect(() => validateRaceCount('1.1')).toThrow(
          ERROR.RACE_COUNT_INTEGER,
        );
      });
      test('경주 시도 횟수 양수여야 한다.', () => {
        expect(() => validateRaceCount('-1')).toThrow(ERROR.RACE_COUNT);
      });
      test('경주 시도 Number.MAX_SAFE_INTEGER의 수보다 작아야 한다.', () => {
        expect(() => validateRaceCount('9007199254740992')).toThrow(
          ERROR.RACE_COUNT_OVER_MAX_SAFE_INTEGER,
        );
      });
    });
    describe('정상 케이스', () => {
      test('경주 시도 횟수는 1이상의 정수여야 한다.', () => {
        expect(() => validateRaceCount('1')).not.toThrow();
      });
    });
  });
});
