import Car from '../src/domain/Car';

test("이름을 가진 자동차를 만들 수 있다.", ()=>{
    const car = new Car("자동차");
    expect(car).toEqual({
        name: "자동차",
        position: 0,
    })
});

test("무작위 값이 4이상일 때 자동차가 전진한다.", ()=>{
    const car = new Car("자동차");
    car.move(4);
    expect(car.position).toBe(1);
});

test("무작위 값이 3이하일 때 자동차가 전진하지 않는다.", ()=>{
    const car = new Car("자동차");
    car.move(3);
    expect(car.position).toBe(0);
});