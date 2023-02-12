const Car = require('../src/domain/Car');
const getObjectsName = require('../src/utils/getObjectsNames');
const inputDataParseAndSplit = require('../src/utils/inputDataParseAndSplit');

describe('util 함수들 테스트', () => {
  test('객체가 들어가있는 배열에서 각 객체의 이름들 배열에 담아 반환하는 유틸함수', () => {
    const carList = [new Car('pobi'), new Car('jun'), new Car('cron')];
    expect(getObjectsName([...carList])).toEqual(['pobi', 'jun', 'cron']);
  });

  test.each([
    ['pobi,    jun, cron  ', ['pobi', 'jun', 'cron']],
    ['gongwon  ,poco ,gugu', ['gongwon', 'poco', 'gugu']],
  ])('입력값들 받아 "," 기준으로 파싱 후 양끝 공백 문자열 제거해주는 유틸함수', (inputData, result) => {
    expect(inputDataParseAndSplit(inputData)).toEqual(result);
  });
});
