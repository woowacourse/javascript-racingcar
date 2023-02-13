const App = require("../src/Racing");

describe("Racing 전체 기능 테스트", () => {
    test("자동차 이름 array로 car객체를 만들어 그 갯수를 반환", () => {
        const app = new App();
        expect(app.createCars(["A", "B", "C"])).toEqual(3);
    });

    test("자동차 경주가 종료 됐을 때 우승자가 존재할 경우 true를 반환", () => {
        const app = new App();
        expect(app.checkWinnerNone(["sua"])).toEqual(true);
    });

    test("자동차 경주가 종료 됐을 때 우승자가 존재할 경우 false를 반환", () => {
        const app = new App();
        expect(app.checkWinnerNone([])).toEqual(false);
    });
});
