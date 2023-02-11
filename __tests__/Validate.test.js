const {
  validateCarName,
  validateRaceTrial,
} = require('../src/validate/InputException');

describe('Validate - 자동차 이름 테스트', () => {
  test.each([['배달의 민족'], ['aaaaaaaaa'], ['adkf ']])(
    '(실패 경우)',
    (input) => {
      expect(() => validateCarName(input)).toThrow('[ERROR]');
    }
  );

  test.each([['light'], ['poo'], ['pobi'], ['crong']])(
    '(성공 경우)',
    (input) => {
      expect(() => validateCarName(input)).not.toThrowError('[ERROR]');
    }
  );
});

describe('Validate - 시도할 횟수 테스트', () => {
  test.each([['배'], ['달'], ['aa']])('(실패 경우)', (input) => {
    expect(() => validateRaceTrial(input)).toThrow('[ERROR]');
  });

  test.each([['1'], ['2'], ['3'], ['100']])('(성공 경우)', (input) => {
    expect(() => validateRaceTrial(input)).not.toThrowError('[ERROR]');
  });
});
