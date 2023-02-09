const Validator = require('../src/utils/Validator');

describe('Validator 테스트', () => {
  test('자동차 이름의 구분자가 쉼표인 경우 정상적으로 작동한다.', () => {
    const carNames = 'as,asdf,afa';

    expect(() => {
      Validator.checkCarName(carNames);
    }).not.toThrow();
  });

  test('자동차 이름의 구분자가 쉼표가 아닌 경우 에러가 발생한다.', () => {
    const carNames = 'as;asdf;afa';

    expect(() => {
      Validator.checkCarName(carNames);
    }).toThrow();
  });

  test.each([['abc,bde', '파인,daw', '황펭a,가나']])(
    '자동차 이름이 알파벳이나 한글로 이루어진 경우 정상적으로 작동한다.',
    (carNames) => {
      expect(() => {
        Validator.checkCarName(carNames);
      }).not.toThrow();
    }
  );

  test('자동차 이름이 알파벳이나 한글이 아닌 문자가 포함됐을 경우 에러가 발생한다.', () => {
    const carNames = '0a';

    expect(() => {
      Validator.checkCarName(carNames);
    }).toThrow();
  });

  test('자동차 이름이 중복되지 않은 경우 정상적으로 작동한다.', () => {
    const carNames = 'abc,def';

    expect(() => {
      Validator.checkCarName(carNames);
    }).not.toThrow();
  });

  test('자동차 이름이 중복된 경우 에러가 발생한다.', () => {
    const carNames = 'abc,abc';

    expect(() => {
      Validator.checkCarName(carNames);
    }).toThrow();
  });

  test.each([[['1'], ['101']]])(
    '이동 횟수가 자연수인 경우 정상적으로 작동한다.',
    (movingCount) => {
      expect(() => {
        Validator.checkMovingCount(movingCount);
      }).not.toThrow();
    }
  );

  test.each([[['0'], ['a'], ['01'], ['-1'], [' 1']]])(
    '이동 횟수가 자연수가 아닌 경우 에러가 발생한다.',
    (movingCount) => {
      expect(() => {
        Validator.checkMovingCount(movingCount);
      }).toThrow();
    }
  );
});
