import Cars from "../src/models/Cars.js";

describe('자동차 리스트 클래스 테스트', () => {

    describe('자동차 리스트 클래스 정상 케이스',  () => {
        const names = ['목성이', '화성이', '금성이'];
        const cars = new Cars(names);
        const movedCars = cars.moveCars();

        test('자동차 리스트를 생성할 수 있다.', () => {
            expect(cars).not.toBeUndefined();
        });

        test('자동차 경주를 한 라운드 실행하면, 전진 또는 멈춘다.', () => {
            

            movedCars.forEach(car => {
                expect(car.position).toBeLessThan(2);
            })
        });

        test('자동차 경주를 한 라운드 실행하면, 최대 위치가 1이다.', () => {
            expect(cars.getMaxPosition()).toBe(1);
        })
    });
});