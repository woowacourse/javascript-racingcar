import { validateEmptyString, validateCarNameLength } from "../../src/utils/validation.js";

describe('utils/validation', () => {
    test("이름 입력에 빈 값이 들어온 경우", () => {
        // given
        const names = ['A', 'B', 'C', '']

        // when & then
        expect(() => validateEmptyString(names)).toThrow('이름이 비어있습니다.');
    });

    test.each([
        [['일이삼사오', '일이삼'], null],
        [['일이삼사오육', '일이삼'], '5자 이하로 설정해주세요.'] 
    ])('%s가 5자 이하인지 확인', (input, expectedError) => {
        if (expectedError) {
            expect(() => validateCarNameLength(input)).toThrow(expectedError);
        } else {
            expect(() => validateCarNameLength(input)).not.toThrow();
        }
    });

})