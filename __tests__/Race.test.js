import { ERROR_MESSAGE } from '../src/constant/message.js';
import Race from '../src/domain/Race.js';

const FAIL_CAR_NAME_TEST_CASE = [
  ['자동차 수가 2대보다 작을 경우 예외처리한다.', { carNames: ['재오'], errorMessage: ERROR_MESSAGE.carCount }],
  [
    '자동차의 이름은 중복되면 안된다.',
    {
      carNames: ['재오', '상추', '앵버', '재오'],
      errorMessage: ERROR_MESSAGE.carNameDuplicate,
    },
  ],
];

const FAIL_TRY_COUNT_TEST_CASE = [
  [
    '시도 횟수가 1보다 작으면 안된다.',
    {
      tryCount: 0,
      errorMessage: ERROR_MESSAGE.tryCount,
    },
  ],
  [
    '시도 횟수가 20보다 크면 안된다.',
    {
      tryCount: 21,
      errorMessage: ERROR_MESSAGE.tryCount,
    },
  ],
];

const SUCCESS_TEST_CASE = [
  {
    carNames: ['재오', '상추'],
    tryCount: 5,
  },
  {
    carNames: ['재오', '상추', '앵버'],
    tryCount: 1,
  },
  {
    carNames: ['재오', '상추', '앵버'],
    tryCount: 20,
  },
];

describe('Race 객체 생성 테스트', () => {
  test.each(FAIL_CAR_NAME_TEST_CASE)('%s', (_, { carNames, errorMessage }) => {
    // given
    const race = new Race();

    // when

    // then
    expect(() => race.initCars(carNames)).toThrow(errorMessage);
  });

  test.each(FAIL_TRY_COUNT_TEST_CASE)('%s', (_, { tryCount, errorMessage }) => {
    // given
    const race = new Race();

    // when

    // then
    expect(() => race.initTryCount(tryCount)).toThrow(errorMessage);
  });

  test.each(SUCCESS_TEST_CASE)('에러 없이 Race 객체 생성', ({ carNames, tryCount }) => {
    // given
    const race = new Race();

    // when

    // then
    expect(() => {
      race.initCars(carNames);
      race.initTryCount(tryCount);
    }).not.toThrow();
  });
});
