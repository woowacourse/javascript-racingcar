import Race from '../src/domain/Race.js';

const FAIL_TEST_CASE = [
  [
    '자동차 수가 2대보다 작을 경우 예외처리한다.',
    { carNames: ['재오'], tryCount: 3, errorMessage: '[ERROR] 자동차는 2대 이상이여야 합니다.' },
  ],
  [
    '자동차의 이름은 중복되면 안된다.',
    {
      carNames: ['재오', '상추', '앵버', '재오'],
      tryCount: 5,
      errorMessage: '[ERROR] 자동차 이름은 중복되면 안됩니다.',
    },
  ],
  [
    '시도 횟수가 1보다 작으면 안된다.',
    {
      carNames: ['재오', '상추', '앵버'],
      tryCount: 0,
      errorMessage: '[ERROR] 시도 횟수는 1 ~ 20 사이여야 합니다.',
    },
  ],
  [
    '시도 횟수가 20보다 크면 안된다.',
    {
      carNames: ['재오', '상추', '앵버'],
      tryCount: 21,
      errorMessage: '[ERROR] 시도 횟수는 1 ~ 20 사이여야 합니다.',
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
  test.each(FAIL_TEST_CASE)('%s', (_, { carNames, tryCount, errorMessage }) => {
    // when
    console.log(carNames, tryCount);

    // then
    expect(() => new Race(carNames, tryCount)).toThrow('[ERROR]');
  });

  test.each(SUCCESS_TEST_CASE)('에러 없이 Race 객체 생성', ({ carNames, tryCount }) => {
    // when

    // then
    expect(() => new Race(carNames, tryCount)).not.toThrow();
  });
});
