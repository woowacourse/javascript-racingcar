import {
  hasRedundantCarName,
  hasSingleCar,
  isInvalidAttemptNum,
  isInvalidCarName,
} from '../../src/domain/validate/validator';

describe('Validator Test', () => {
  const invalidCarNamesInput = [
    {
      input: 'aaaaaa,asdf',
    },
    {
      input: 'asdf/asd',
    },
    {
      input: 'as s, asd',
    },
    {
      input: ' , asd, asdf',
    },
  ];
  test.each(invalidCarNamesInput)(
    'isInvalidCarName Test - 6자 이상, 쉼표가 아닌 구분자, 공백 문자를 포함한 입력이 들어올 경우 true를 반환한다.',
    ({ input }) => {
      expect(isInvalidCarName(input)).toBe(true);
    },
  );

  const redunDantCarNamesInput = [
    {
      input: 'pobi,pobi',
    },
    {
      input: 'pobi,jay,pobi',
    },
  ];
  test.each(redunDantCarNamesInput)('hasRedundantCarName Test - 이름이 중복됐을 경우 true를 반환한다.', ({ input }) => {
    expect(hasRedundantCarName(input)).toBe(true);
  });

  const singleCarInput = [
    {
      input: 'pobi',
    },
  ];
  test.each(singleCarInput)('hasSingleCar Test - 자동차가 1개만 입력됐을 경우 true를 반환한다.', ({ input }) => {
    expect(hasSingleCar(input)).toBe(true);
  });

  const attemptNumInput = [
    {
      input: 's',
    },
    {
      input: '0',
    },
    {
      input: '-1',
    },
    {
      input: '1.2',
    },
  ];
  test.each(attemptNumInput)(
    'isInvalidAttemptNum Test - 숫자가 아닌 문자, 1 이하의 정수, 소수가 입력됐을 경우 true를 반환한다.',
    ({ input }) => {
      expect(isInvalidAttemptNum(input)).toBe(true);
    },
  );
});
