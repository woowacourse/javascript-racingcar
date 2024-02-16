import { Validator } from '../src/models/Validator.js';

describe('시도 횟수 입력에 대한 유효성 테스트', () => {
	test('유효한 값을 넣었을 때 해당 값을 반환한다.', () => {
		const input = 5;
		const expectResult = Validator.validateCountOfAttempt(input);

		expect(input).toEqual(expectResult);
	});

	test.each([[21], [-4], [1.4], ['pobi'], [''], [0]])('유효하지 않은 값을 넣으면 에러를 발생시킨다.', (input) => {
		expect(() => {
			Validator.validateCountOfAttempt(input);
		}).toThrow('[ERROR]');
	});
});
