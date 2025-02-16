import Car from '../src/domain/Car';
import DEFINITION from '../src/constants/Definition';

test('이름을 가진 자동차를 만들 수 있다.', ()=>{
    const car = new Car("자동차");
    expect(car).toEqual({
        name: "자동차",
        position: DEFINITION.DEAFULT_POSITION,
    })
});

test(`무작위 값이 ${DEFINITION.MOVE_CONDITION} 이상일 때 자동차가 전진한다.`, ()=>{
    const car = new Car("자동차");
    car.move(DEFINITION.MOVE_CONDITION);
    expect(car.position).toBe(DEFINITION.MOVE_FORWARD);
});

test(`무작위 값이 ${DEFINITION.MOVE_CONDITION} 미만일 때 자동차가 전진하지 않는다.`, ()=>{
    const car = new Car("자동차");
    car.move(DEFINITION.MOVE_CONDITION-1);
    expect(car.position).toBe(DEFINITION.DEAFULT_POSITION);
});