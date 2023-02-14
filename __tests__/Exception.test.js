const { StaticValue } = require('../src/constants/constants');
const Exception = require('../src/utils/Exception');

describe('Exception 객체 테스트', () => {
  describe('자동차 이름 입력 값 예외 테스트', () => {
    test('이름에 공백 또는 빈 문자열이 포함되어 있으면 에러를 발생시키는지 확인', () => {
      const NAME_INPUTS = ['', ' ', '우형 배민', ' 짜장면'];

      expect(() => {
        Exception.checkCarInput(NAME_INPUTS);
      }).toThrow();
    });

    test(`이름이 ${StaticValue.CAR_NAME_LIMIT}글자 이상인 경우 에러를 발생시키는지 확인`, () => {
      const NAME_INPUTS = ['안녕하세요', '배달의민족입니다', '우형', '배민입니다요'];

      expect(() => {
        Exception.checkCarInput(NAME_INPUTS);
      }).toThrow();
    });

    test('이름이 숫자로 시작하는 경우 에러를 발생시키는지 확인', () => {
      const NAME_INPUTS = ['원', '투', '쓰리', '포', '5이브'];

      expect(() => {
        Exception.checkCarInput(NAME_INPUTS);
      }).toThrow();
    });

    test('중복된 이름 입력시 에러를 발생시키는지 확인', () => {
      const NAME_INPUTS = ['안녕하세요', '배달의민족', '우형', '배달의민족'];

      expect(() => {
        Exception.checkCarInput(NAME_INPUTS);
      }).toThrow();
    });
  });

  describe('시도 횟수 입력 값 예외 테스트', () => {
    test('0이하의 숫자 입력시 에러를 발생시키는지 확인', () => {
      const MOVE_COUNT_INPUTS = ['0', '-1', '-2'];

      MOVE_COUNT_INPUTS.forEach((moveCount) => {
        expect(() => {
          Exception.checkMoveCountInput(moveCount);
        }).toThrow();
      });
    });

    test('숫자가 아닌 문자 입력시 에러를 발생시키는지 확인', () => {
      const MOVE_COUNT_INPUTS = ['a', '-b', '+c', '', ' ', '1A', ' 1A', '1 A', '1 2 3', '3 4 5', 'A1'];

      MOVE_COUNT_INPUTS.forEach((moveCount) => {
        expect(() => {
          Exception.checkMoveCountInput(moveCount);
        }).toThrow();
      });
    });
  });
});
