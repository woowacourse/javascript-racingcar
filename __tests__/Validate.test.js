import Validate from '../src/utils/Validate'
import ERROR_MESSAGE from '../src/constants/RacingErrorMessage';
import DEFINITION from '../src/constants/Definition';

test('공백 입력 시 에러 발생', () => {
  const validate = new Validate();
  expect(() => {
    validate.isEmpty('');
  }).toThrow(ERROR_MESSAGE.IS_EMPTY);
})

test('\',\' 입력 시 에러 발생', () => {
  const validate = new Validate();
  expect(() => {
    validate.isValidCarNames(',');
  }).toThrow(ERROR_MESSAGE.IS_EMPTY);
})

test(`자동차 이름 글자수 ${DEFINITION.MAX_NAME_LENGTH}자 초과시 에러 발생`, () =>{
    const validate = new Validate();
    expect(() => {
        validate.isValidCarNames('ABCDEF');
    }).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
})

test(`경주 자동차 ${DEFINITION.MIN_RACE_CAR}대 미만일 시 에러 발생`, () => {
  const validate = new Validate();
  expect(()=>{
    validate.isEnoughCars(['car1']);
  }).toThrow(ERROR_MESSAGE.NOT_ENOUGH_CARS);
})

test('숫자가 아닌 입력 시 에러 발생', () =>{
  const validate = new Validate();
  expect(() => {
      validate.isNumber(Number("ABCDEF"));
  }).toThrow(ERROR_MESSAGE.IS_NUMBER);
})

test(`${DEFINITION.MIN_ATTEMPTS} 이하의 숫자 입력 시 에러 발생 `, () =>{
  const validate = new Validate();
  expect(() => {
      validate.isPositiveNumber(DEFINITION.MIN_ATTEMPTS-1);
  }).toThrow(ERROR_MESSAGE.IS_POSITIVE_NUMBER);
})

test('정수가 아닌 입력 시 에러 발생', () =>{
  const validate = new Validate();
  expect(() => {
      validate.isInteger(3.1);
  }).toThrow(ERROR_MESSAGE.IS_INTEGER);
})