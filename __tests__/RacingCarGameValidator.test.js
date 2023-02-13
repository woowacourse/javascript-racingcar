const { validateCarNames, validateMovingCount } = require('../src/domain/validator');

describe('자동차 이름 입력 유효성 검사', () => {
  test.each(['abc,bde', '파인,daw', '황펭a,가나'])(
    '자동차 이름이 알파벳이나 한글로 이루어진 경우 정상적으로 작동한다.',
    (carNames) => {
      expect(() => {
        validateCarNames(carNames);
      }).not.toThrow();
    },
  );

  test('자동차 이름이 알파벳이나 한글이 아닌 문자가 포함됐을 경우 에러가 발생한다.', () => {
    const carNames = '0a,황펭';

    expect(() => {
      validateCarNames(carNames);
    }).toThrow();
  });
  test('자동차 이름이 두 개 이상이면 정상적으로 작동한다.', () => {
    const carNames = 'as,asdf,afa';

    expect(() => {
      validateCarNames(carNames);
    }).not.toThrow();
  });

  test('자동차 이름이 한 대 이하면 에러가 발생한다.', () => {
    const carNames = 'asdf';

    expect(() => {
      validateCarNames(carNames);
    }).toThrow();
  });

  test('자동차 이름이 중복되지 않은 경우 정상적으로 작동한다.', () => {
    const carNames = 'abc,def';

    expect(() => {
      validateCarNames(carNames);
    }).not.toThrow();
  });

  test('자동차 이름이 중복된 경우 에러가 발생한다.', () => {
    const carNames = 'abc,abc';

    expect(() => {
      validateCarNames(carNames);
    }).toThrow();
  });
});

describe('이동 횟수 입력 유효성 검사', () => {
  test.each([['1', '101']])('이동 횟수가 자연수인 경우 정상적으로 작동한다.', (movingCount) => {
    expect(() => {
      validateMovingCount(movingCount);
    }).not.toThrow();
  });

  test.each([['0', 'a', '01', '-1']])(
    '이동 횟수가 자연수가 아닌 경우 에러가 발생한다.',
    (movingCount) => {
      expect(() => {
        validateMovingCount(movingCount);
      }).toThrow();
    },
  );

  test('이동횟수가 0으로 시작하면 에러가 발생한다', () => {
    const movingCount = '01';
    expect(() => {
      validateMovingCount(movingCount);
    }).toThrow();
  });

  test('이동 횟수에 공백이 입력되었다면 에러가 발생한다.', () => {
    const movingCount = ' 1';

    expect(() => {
      validateMovingCount(movingCount);
    }).toThrow();
  });
});
