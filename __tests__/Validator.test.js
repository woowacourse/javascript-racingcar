import DEFINITION from '../src/constants/Definition';
import { Validator } from '../src/utils/Validator';

test('자동차 이름이 40개 이상이면 true를 반환한다. ', () => {
  //given
  const inputValue = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ,ㅅ,ㅇ,ㅈ,ㅊ,ㅋ,ㅌ,ㅍ,ㅎ,ㅏ,ㅑ,ㅓ,ㅕ,ㅗ,ㅛ,ㅜ,ㅠ,ㅡ,ㅣ'.split(',');
  //when
  const result = Validator.isArrayLengthOver(inputValue, DEFINITION.MAX_CAR_RACERS);
  //then
  expect(result).toBe(true);
});

test('이름이 5글자 이상이면 true를 반환한다. ', () => {
  //given
  const inputValue = 'asdfqwer';
  //when
  const result = Validator.isStringLengthOver(inputValue, DEFINITION.MAX_NAME_LENGTH);
  //then
  expect(result).toBe(true);
});

test('경기 횟수가 100회 초과하면 true를 반환한다. ', () => {
  //given
  const inputValue = 101;
  //when
  const result = Validator.isRangeOver(inputValue, DEFINITION.MIN_GAME, DEFINITION.MAX_GAME);
  //then
  expect(result).toBe(true);
});

test('경기 횟수가 0회 미만이면 true를 반환한다. ', () => {
  //given
  const inputValue = 0;
  //when
  const result = Validator.isRangeOver(inputValue, DEFINITION.MIN_GAME, DEFINITION.MAX_GAME);
  //then
  expect(result).toBe(true);
});
