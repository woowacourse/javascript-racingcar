const Exception = require('../src/utils/Exception');

describe('Exception 객체 테스트', () => {
  test('공백 또는 빈 문자열이 포함되어 있으면 에러를 발생시키는지 확인', () => {
    const NAME_INPUTS = ['', ' ', '우형 배민', ' 짜장면'];

    expect(() => {
      Exception.checkCarInput(NAME_INPUTS);
    }).toThrow();
  });

  test('이름이 5글자 이상인 경우 에러를 발생시키는지 확인', () => {
    const NAME_INPUTS = ['안녕하세요', '배달의민족입니다', '우형', '배민입니다요'];

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

  test('0이하의 숫자 입력시 에러를 발생시키는지 확인', () => {
    const MOVE_COUNT_INPUTS = ['0', '-1', '-2'];

    MOVE_COUNT_INPUTS.forEach((moveCount) => {
      expect(() => {
        Exception.checkMoveCountInput(moveCount);
      }).toThrow();
    });
  });

  test('숫자가 아닌 문자 입력시 에러를 발생시키는지 확인', () => {
    const MOVE_COUNT_INPUTS = ['a', '-b', '+c'];

    MOVE_COUNT_INPUTS.forEach((moveCount) => {
      expect(() => {
        Exception.checkMoveCountInput(moveCount);
      }).toThrow();
    });
  });

  test('공백 또는 빈 문자열이 포함되어 있으면 에러를 발생시키는지 확인', () => {
    const MOVE_COUNT_INPUTS = ['', ' ', ' 2'];

    MOVE_COUNT_INPUTS.forEach((moveCount) => {
      expect(() => {
        Exception.checkMoveCountInput(moveCount);
      }).toThrow();
    });
  });
});
