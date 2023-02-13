import Validator from '../src/domain/Validator.js';
import { MESSAGE } from '../src/util/Constant.js';

describe('사용자가 올바른 자동차 이름을 입력하지 않을 경우, 에러 메시지를 호출한다.', () => {
  test.each([
    ['aa,bb,', MESSAGE.error.exist],
    ['aaa,b b,ccc', MESSAGE.error.blank],
    ['aaa,bbbbbb,ccc', MESSAGE.error.nameLength],
    ['aaa,bbb,Ccc', MESSAGE.error.lowerCase],
    ['aaa,aaa,ccc', MESSAGE.error.duplicatedName],
  ])('자동차 이름에 대한 유효성 검사 테스트', (carNames, errorMessage) => {
    expect(() => {
      Validator.carName(carNames);
    }).toThrow(errorMessage);
  });
});

describe('사용자가 올바른 시도 횟수를 입력하지 않을 경우, 에러 메시지를 호출한다.', () => {
  test.each([['-2'], ['3.142592'], ['0']])(
    '%s가 입력되면 예외를 발생시킨다.',
    (number) => {
      expect(() => {
        Validator.tryCount(number);
      }).toThrow(MESSAGE.error.numeric);
    }
  );
});
