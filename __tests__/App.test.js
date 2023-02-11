const App = require("../src/App");
const CarGame = require("../src/CarGame");

test("입력받은 자동차 이름 콤마(,)로 분리 후 앞뒤 공백 제거 테스트", () => {
  const app = new App(new CarGame());

  const names = "야미,클린 ,레고, 타미";
  const splitName = app.splitCarNames(names);

  expect(splitName).toEqual(["야미", "클린", "레고", "타미"]);
});
