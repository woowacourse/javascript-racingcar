const { Validator } = require('../src/Validator');

test('자동차 이름 입력에 대한 예외 테스트', () => {
  const inputValues = [
    ['abcdef', 'avcd', 'abc'],
    ['a', 'a', 'c', 'd'],
  ];
  inputValues.forEach((inputValue) => {
    expect(() => Validator.validateName(inputValue)).toThrow();
  });
});

test('시도 횟수에 대한 예외 테스트', () => {
  const inputValues = ['', '-4', '0', 'not', '1.34'];
  inputValues.forEach((inputValue) => {
    expect(() => Validator.validateName(inputValue)).toThrow();
  });
});
