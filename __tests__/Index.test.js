const App = require("../src");

describe("Racing 전체 기능 테스트", () => {
    test("차 객체 생성 확인", () => {
        const app = new App();
        expect(app.createCars(["A", "B", "C"])).toEqual(3);
    });

    test("승리자 Array가 요소가 있는지에 따라 논리값 return", () => {
        const app = new App();
        expect(app.checkWinnerNone([])).toEqual(false);
    });
});
