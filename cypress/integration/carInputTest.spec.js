import { selectors } from "../../src/js/keys.js";

describe("자동차 이름 검증 테스트", () => {

  const inputTest = function (value, shouldBeVisible) {
    cy.visit("http://localhost:5500/index.html");
    cy.get(selectors.countContainer).invoke("attr", "style", "display: none");
    cy.get(selectors.carNamesInput).clear();

    cy.get(selectors.carNamesInput).type(value);
    cy.get(selectors.carNamesSubmit).click();

    if(shouldBeVisible){
      cy.get(selectors.countContainer).should("to.be.visible");  
      cy.get(selectors.carNamesInput).should('have.attr', 'disabled');
      cy.get(selectors.carNamesSubmit).should('have.attr', 'disabled');
    }else{
      cy.get(selectors.countContainer).should("not.to.be.visible");  
    }
  };

  it("자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.", () => {
    inputTest("123,12", true);
    inputTest("123123213,1", false);
    inputTest("EAST, WEST, SOUTH, NORTH", true);
    inputTest("EAST, WEST, SOUTH, NORTH, EAST2, WEST2, SOUTH2, NORTH2, 1", false);
  });

  it("자동차 이름은 최소 1자 이상이어야 한다.", () => {
    inputTest("1,", false);
    inputTest("1,2,3", true);
  });

  it("자동차 이름은 소문자, 대문자, 숫자로만 구성되어야 한다.", () => {
    inputTest("주모", false);
    inputTest("!$@#%^&@!^#&*@!#*@!(", false);
    inputTest("?", false);
    inputTest("0aOP", true);
    inputTest("   ", false);
  });

  it("자동차 이름은 서로 중복될 수 없다.", () => {
    inputTest("1,3,1", false);
    inputTest("1,2", true);
    inputTest("zzzz,zzzz", false);
    inputTest("3,4,5,6,7,8,9,0", true);
    inputTest("333,33,3", true);
  });
});
