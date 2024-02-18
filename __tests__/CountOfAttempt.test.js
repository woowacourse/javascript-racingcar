import Validator from '../src/domain/models/Validator';

const validInputsTest = () => {
  test('1~20 사이의 정수가 시도횟수로 입력 되었을때 해당 값을 반환한다', () => {
    const validateInput = 5;
    const expectResult = Validator.validateCountOfAttempt(validateInput);

    expect(validateInput).toEqual(expectResult);
  });
};

const invalidInputsTest = () => {
  test.each([[21], [-4], [1.4], ['pobi'], [''], [0]])('입력한 시도횟수 "%s"는 1~20 사이의 정수가 아니므로 에러를 발생시킨다.', (invalidInput) => {
    expect(() => {
      Validator.validateCountOfAttempt(invalidInput);
    }).toThrow('[ERROR]');
  });
};

describe('시도 횟수 입력에 대한 유효성 테스트', () => {
  validInputsTest();
  invalidInputsTest();
});
