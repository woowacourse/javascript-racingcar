import { SELECTOR } from "../../src/js/util/constants.js";

describe("자동차 이름 입력하기", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.window().then((win) => cy.stub(win, "alert").as("windowAlert"));
  });

  const testInitialState = () => {
    cy.get(SELECTOR.TITLE.CONTAINER).should("be.visible");
    cy.get(SELECTOR.CAR_NAME.CONTAINER).should("be.visible");
    cy.get(SELECTOR.LAP.CONTAINER).should("not.be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should("not.be.visible");
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("not.be.visible");
  };

  it("최초 실행시 타이틀과 자동차 이름 입력란, 확인 버튼민 보인다.", () => {
    testInitialState();
  });

  it("자동차 이름은 5자 이하이다.", () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type("WOOCOURSE, SIMBA, DONGDONG");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should(
      "be.calledWith",
      "자동차 이름은 5자 이하로 지어주세요."
    );
    testInitialState();
  });

  it("자동차 이름은 두 개 이상이다.", () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type("SIMBA");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should(
      "be.calledWith",
      "두 개 이상의 자동차 이름을 입력해주세요."
    );
    testInitialState();
  });

  it("자동차 이름은 빈 값이 아니다.", () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type(" ");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should(
      "be.calledWith",
      "두 개 이상의 자동차 이름을 입력해주세요."
    );
    testInitialState();
  });

  it("올바른 이름이 되었을 때", () => {
    const userInput = "EAST, WEST, SOUTH, NORTH";
    const expectedNames = userInput.split(",").map((name) => name.trim());

    cy.get(SELECTOR.CAR_NAME.INPUT).type(userInput);
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();

    cy.get(SELECTOR.LAP.CONTAINER).should("be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should("be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER)
      .get("car-player")
      .each((car, index) => {
        car.should("have.text", expectedNames[index]);
      });
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("not.be.visible");
  });
});
