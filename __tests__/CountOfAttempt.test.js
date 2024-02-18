import { Validator } from '../src/domain/models/Validator.js';

describe('시도 횟수 입력에 대한 유효성 테스트', () => {
	test('type이 number이고 자연수이며 시도 제한 횟수 이하의 유효한 값을 넣었을 때 해당 값을 반환한다.', () => {
		const validateInput = 5;
		const expectResult = Validator.validateCountOfAttempt(validateInput);

		expect(validateInput).toEqual(expectResult);
	});

	test.each([[21], [-4], [1.4], ['pobi'], [''], [0]])(
		'시도 제한 횟수 이상이며, 자연수가 아니고 type이 number가 아닌 유효하지 않은 값을 넣으면 에러를 발생시킨다.',
		(invalidInput) => {
			expect(() => {
				Validator.validateCountOfAttempt(invalidInput);
			}).toThrow('[ERROR]');
		}
	);
});
