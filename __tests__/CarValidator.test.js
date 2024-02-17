import { ERROR_MESSAGE } from '../src/constants';
import { CarValidator } from '../src/models';

describe('자동차 관련 유효성 검사 테스트', () => {
  test('자동차 이름에 대한 조건을 모두 충족한 상황 테스트', () => {
    const inputArray = ['a', '가나,다,라마바,a가,사아'];

    inputArray.forEach((input) => {
      expect(() => CarValidator.validate(input)).not.toThrow();
    });
  });

  describe('자동차 이름에 대한 입력값의 오류 상황 테스트', () => {
    test('자동차의 이름에 영어 또는 한글이 아닌 문자 또는 공백이 존재하면 오류 출력', () => {
      const inputArray = ['ab3', ' ab가', '가나!'];

      inputArray.forEach((input) => {
        expect(() => CarValidator.validate(input)).toThrow(
          ERROR_MESSAGE.carName,
        );
      });
    });

    test('자동차의 이름이 1자 이상 5자 이내의 문자가 아닌 경우 오류 출력', () => {
      const inputArray = ['abcdef', ''];

      inputArray.forEach((input) => {
        expect(() => CarValidator.validate(input)).toThrow(
          ERROR_MESSAGE.carName,
        );
      });
    });

    test(' 자동차 이름 조건은 충족했지만, 쉼표로 자동차를 구분하지 않은 경우 오류 출력', () => {
      const inputArray = ['a포 b c', 'a-포-비', 'a/포/비'];

      inputArray.forEach((input) => {
        expect(() => CarValidator.validate(input)).toThrow(
          ERROR_MESSAGE.carName,
        );
      });
    });

    test('참여자(자동차) 리스트에 중복되는 원소가 있을 때 오류 출력', () => {
      const input = 'a,a';
      expect(() => CarValidator.validate(input)).toThrow(
        ERROR_MESSAGE.duplicate,
      );
    });

    test('참여자(자동차)의 수가 1~5 사이 값이 아닐 때 오류 출력', () => {
      const inputArray = [, 'a,b,c,d,e,f'];

      inputArray.forEach((input) => {
        expect(() => CarValidator.validate(input)).toThrow(
          ERROR_MESSAGE.numberOfCars,
        );
      });
    });
  });
});
