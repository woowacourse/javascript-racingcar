import ScoreBoard from '../src/domain/models/ScoreBoard';

const validInputsTest = () => {
  test('특수문자가 존재하지 않는 5글자 이하의 이름 리스트가 중복되지 않으면, 0으로 초기화된 Map 객체를 반환한다', () => {
    const validateInput = ['pobi', 'jun'];

    const expectedResult = new Map(validateInput.map((name) => [name, 0]));

    const scoreBoard = new ScoreBoard(validateInput);
    expect(scoreBoard.getScoreBoard()).toEqual(expectedResult);
  });
};

const invalidInputTest = () => {
  test.each([[['!df', 'soha']], [['brgndy', 'pobi']], [['왼손', '왼손', '공원']]])('이름 리스트 %s는 6글자 이상 혹은 특수문자 존재, 중복된 이름이 존재므로 에러를 발생시킨다.', (invalidInputs) => {
    expect(() => {
      const scoreBoard = new ScoreBoard(invalidInputs);
    }).toThrow('[ERROR]');
  });
};

describe('스코어보드에 대한 유효성 테스트', () => {
  validInputsTest();
  invalidInputTest();
});
