import DEFINITION from '../src/constants/Definition';
import Car from '../src/domain/Car';
describe('자동차 생성 테스트', () => {
  test('자동차의 이름이 5글자를 초과하면 에러가 발생한다.', () => {
    // given
    const name = ['beomtae', 'dobab'];
    // when
    // then
    expect(() => new Car(name)).toThrow();
  });

  test('자동차의 이름이 5글자 이하라면 객체를 생성한다.', () => {
    // given
    const name = ['beom', 'dobab'];
    // when
    const car = new Car(name);
    // then
    expect(car.name).toBe(name);
  });

  test('자동차의 이름이 중복되면 에러가 발생한다.', () => {
    // given
    const name = ['beom', 'beom'];
    // when
    // then
    expect(() => new Car(name)).toThrow();
  });

  test('자동차 이름이 40개 이상이면 에러가 발생한다. ', () => {
    //given
    const names = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ,ㅅ,ㅇ,ㅈ,ㅊ,ㅋ,ㅌ,ㅍ,ㅎ,ㅏ,ㅑ,ㅓ,ㅕ,ㅗ,ㅛ,ㅜ,ㅠ,ㅡ,ㅣ'.split(',');
    //when
    //then
    expect(() => names.map(name => new Car(name))).toThrow();
  });
});

describe('자동차 기능 테스트', () => {
  test(`자동차가 ${DEFINITION.MOVE_CONDITION}을 만족하면 1만큼 전진 해야한다.`, () => {
    //given
    const car = new Car(['beom', 'dobab']);

    //when
    car.moveForward(DEFINITION.MOVE_CONDITION);

    //then
    expect(car.position).toBe(1);
  });

  test('자동차가 전진 조건을 만족하지 못하면 멈춰야한다.', () => {
    //given
    const car = new Car(['beom', 'dobab']);
    //when
    car.moveForward(3);
    //then
    expect(car.position).toBe(0);
  });
});
