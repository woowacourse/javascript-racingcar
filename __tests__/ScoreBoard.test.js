import ScoreBoard from '../src/domain/models/ScoreBoard.js';

describe('스코어보드에 대한 유효성 테스트', () => {
	test('중복된 이름이 없으며 각 이름이 5글자 이하 및 특수문자가 존재하지 않는 유효한 값을 넣으면, 0으로 초기화된 Map 객체를 반환한다', () => {
		const validateInput = ['pobi', 'jun'];

		const expectedResult = new Map();
		validateInput.forEach((name) => {
			expectedResult.set(name, 0);
		});

		const scoreBoard = new ScoreBoard(validateInput);
		const initializedBoard = scoreBoard.getScoreBoard();

		expect(initializedBoard).toEqual(expectedResult);
	});

	test.each([[['!df', 'soha']], [['brgndy', 'pobi']], [['왼손', '왼손', '공원']]])(
		'유효하지 않은 값을 넣으면 에러를 발생시킨다.',
		(invalidInputs) => {
			expect(() => {
				new ScoreBoard(invalidInputs);
			}).toThrow('[ERROR]');
		}
	);
});
