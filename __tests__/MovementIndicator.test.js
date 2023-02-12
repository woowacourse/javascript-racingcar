const { isMoving } = require("../src/Utils/ConvenientFunctions");

test.each([5, 4, 7, 6, 8, 9])(
  "생성된 난수가 4이상일 경우 true 반환 ",
  (number) => {
    expect(() => isMoving(number)).toBeTruthy();
  },
);
