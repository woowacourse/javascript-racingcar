const { Validator } = require('../src/Validator');

describe('입력된 자동차 이름에 대한 테스트', () => {
  test.each(['!,b,c', 'a,a,b', 'abcdef,b,c'])('예외 발생 테스트', (names) => {
    console.log(names);
    expect(() => Validator.validateName(names.split(','))).toThrow();
  });
});

describe('입력된 시도 횟수에 대한 테스트', () => {
  test.each(['0', '-1', '', 's', '1.34'])('예외 발생 테스트', (tryCount) => {
    expect(() => Validator.validateTryCnt(tryCount)).toThrow();
  });
});
