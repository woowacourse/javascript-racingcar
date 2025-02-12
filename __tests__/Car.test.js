import Car from '../src/Car';

test("자동차를 만들 수 있다.", ()=>{
    const car = new Car("자동차");
    expect(car).toBeDefined(); 
});