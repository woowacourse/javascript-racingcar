describe("자동차 이름 검증 테스트", () => {
  before(() => {
    cy.visit("http://localhost:5500/index.html");
  });

  const inputTest = function (value, shouldBeVisible) {
    // 초기화
    cy.get("#count-container").invoke("attr", "style", "display: none");
    cy.get("#car-names-input").clear();

    cy.get("#car-names-input").type(value);
    cy.get("#car-names-submit").click();
    cy.get("#count-container").should(
      shouldBeVisible ? "to.be.visible" : "not.to.be.visible"
    );
  };

  // 쉼표를 구분하여 5자 초과되는 경우 - false
  // 쉼표를 구분하여 5자 이하인 경우 - true
  it("자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.", () => {
    inputTest("123,12", true);
    inputTest("123123213,1", false);
  });

  // 자동차 이름이 1자가 안되는 경우 - false
  // 자동차 이름이 1자 이상인 경우 - true
  it("자동차 이름은 최소 1자 이상이어야 한다.", () => {
    inputTest("1,", false);
    inputTest("1,2,3", true);
  });

  // 자동차 이름에 공백이 포함되는 경우 - false
  // 자동차 이름에 특수 문자가 포함되는 경우 - false
  // 자동차 이름이 소문자, 대문자, 숫자 구성되는 경우 - true
  it("자동차 이름은 소문자, 대문자, 숫자로만 구성되어야 한다.", () => {
    inputTest("주모", false);
    inputTest("!$@#%^&@!^#&*@!#*@!(", false);
    inputTest("?", false);
    inputTest("0aOP", true);
    inputTest("   ", false);
  });

  // 자동차에 중복된 이름이 있는 경우 - false
  // 자동차에 중복된 이름이 없는 경우 - true
  it("자동차 이름은 서로 중복될 수 없다.", () => {
    inputTest("1,3,1", false);
    inputTest("1,2", true);
    inputTest("zzzz,zzzz", false);
    inputTest("3,4,5,6,7,8,9,0", true);
    inputTest("333,33,3", true);
  });
});
