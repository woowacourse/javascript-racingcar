import StringHandler from "../src/utils/StringHandler"

describe ('유틸리티 함수 테스트', () => {
    test('문자열을 분리 기호로 나누어 배열로 저장하는 함수 테스트', () =>{
        const userInputString = 'pobi,jun,woni';
        const userInputArray = ['pobi', 'jun', 'woni'];
        expect(StringHandler.stringToArray(userInputString)).toEqual(userInputArray);
    })
})