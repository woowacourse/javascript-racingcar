import ScoreBoard from '../src/models/ScoreBoard.js';

describe('스코어보드에 대한 유효성 테스트', () => {
	test('유효한 값읋 넣으면 0으로 초기화된 Map 객체를 반환한다', () => {
		const input = ['pobi', 'jun'];

		const expectedResult = new Map();
		input.forEach((name) => {
			expectedResult.set(name, 0);
		});

		const scoreBoard = new ScoreBoard(input);
		const initializedBoard = scoreBoard.getScoreBoard();

		expect(initializedBoard).toEqual(expectedResult);
	});

	test.each([[['!df', 'soha']], [['brgndy', 'pobi']], [['왼손', '왼손', '공원']]])(
		'유효하지 않은 값을 넣으면 에러를 발생시킨다.',
		(inputs) => {
			expect(() => {
				new ScoreBoard(inputs);
			}).toThrow('[ERROR]');
		}
	);
});
