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
  test.each(invalidCarNamesInput)('isInvalidCarName Test', ({ input }) => {
    expect(isInvalidCarName(input)).toBe(true);
  });

  const redunDantCarNamesInput = [
    {
      input: 'pobi,pobi',
    },
    {
      input: 'pobi,jay,pobi',
    },
  ];

  test.each(redunDantCarNamesInput)('hasRedundantCarName Test', ({ input }) => {
    expect(hasRedundantCarName(input)).toBe(true);
  });

  const singleCarInput = [
    {
      input: 'pobi',
    },
  ];

  test.each(singleCarInput)('hasSingleCar Test', ({ input }) => {
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

  test.each(attemptNumInput)('isInvalidAttemptNum Test', ({ input }) => {
    expect(isInvalidAttemptNum(input)).toBe(true);
  });
});
