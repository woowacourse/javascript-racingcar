import Car from "../src/Car";

test('자동차는 이름을 가져야 한다.', () => {
    const name = "공원";
    const car = new Car(name);
    expect(car.name).toBe(name);
});


test.each([
    [""],
    ["아주긴자동차"]
])('자동차 이름은 5자 이하여야한다.', () => {
    //0(x),5(o),6(x) -> 여기서 에러가 잘 발생하는지 확인한다.
    //0글자일때도 에러 발생하게 만들어야한다. 이렇게 하면서 현재 코드의 완성도를 볼수있다.

    //given
    //when
    expect(()=>{
        const car = new Car(name);
    }).toThrow();
    
    //then
});

test('자동차는 전진할수 있다', () => {
    const car = new Car("공원")
    car.move(4);
    expect(car.position).toBe(1);
});