import { validateMoveCount } from "../../src/utils/validateMoveCount.js";

describe('utils/valideMoveCount', () => {
    test.each([
        ['1', null],
        ['2', null],
        ['15', null],

        ['0', "1 이상의 숫자를 입력해주세요."], 
        ['1.5', "1 이상의 숫자를 입력해주세요."], 
        ['-5', "1 이상의 숫자를 입력해주세요."] 
    ])('%s가 1 이상의 숫자인지 확인', (input, expectedError) => {
        if (expectedError) {
            expect(() => validateMoveCount(input)).toThrow("1 이상의 숫자를 입력해주세요.");
        } else {
            expect(() => validateMoveCount(input)).not.toThrow();
        }
    });

})