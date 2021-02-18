import { SELECTOR, MESSAGE } from "../../src/js/constants.js";

describe("자동차 이름 입력하기", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().then((win) => cy.stub(win, "alert").as("windowAlert"));
  });

  const testInitialState = () => {
    cy.get(SELECTOR.TITLE.CONTAINER).should("be.visible");
    cy.get(SELECTOR.CAR_NAME.CONTAINER).should("be.visible");
    cy.get(SELECTOR.LAP_COUNT.CONTAINER).should("not.be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should("not.be.visible");
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("not.be.visible");
  };

  it("최초 실행시 타이틀과 자동차 이름 입력란, 확인 버튼만 보인다.", () => {
    testInitialState();
  });

  it('쉼표(,)로 구분한 이름이 빈 문자열("")이면 무시된다.', () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type("a,,b");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should("not.be.called");
    cy.get(SELECTOR.LAP_COUNT.CONTAINER).should("be.visible");
  });

  it("자동차 이름은 두 개 이상이다.", () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type("SIMBA");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should("be.calledWith", MESSAGE.CAR_NAME.MIN_NUMBER);
    testInitialState();
  });

  it("자동차 이름은 빈 값이 아니다.", () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type(" ");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should("be.calledWith", MESSAGE.CAR_NAME.MIN_NUMBER);
    testInitialState();
  });

  it("자동차 이름은 5자 이하이다.", () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type("WOOCOURSE, SIMBA, DONGDONG");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should("be.calledWith", MESSAGE.CAR_NAME.MAX_LENGTH);
    testInitialState();
  });

  it("자동차 이름은 서로 중복되지 않는다.", () => {
    cy.get(SELECTOR.CAR_NAME.INPUT).type("WOOWA, SIMBA, SIMBA");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get("@windowAlert").should(
      "be.calledWith",
      MESSAGE.CAR_NAME.DUPLICATION
    );
    testInitialState();
  });

  it("자동차 이름은 처음과 끝을 제외하고 공백문자를 포함할 수 있다", () => {
    const userInput = "EAST, WEST, SO U, Da L  ";
    const expectedNames = ["EAST", "WEST", "SO U", "Da L"];

    cy.get(SELECTOR.CAR_NAME.INPUT).type(userInput);
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();

    cy.get(SELECTOR.LAP_COUNT.CONTAINER).should("be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should("be.visible");
    cy.get(`${SELECTOR.GAME_PROGRESS.CONTAINER} .car-player`).each(
      (car, index) => {
        cy.wrap(car).should("have.text", expectedNames[index]);
      }
    );
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("not.be.visible");
  });

  it("올바른 이름이 되었을 때", () => {
    const userInput = "EAST, WEST, SOUTH, NORTH";
    const expectedNames = ["EAST", "WEST", "SOUTH", "NORTH"];

    cy.get(SELECTOR.CAR_NAME.INPUT).type(userInput);
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();

    cy.get(SELECTOR.LAP_COUNT.CONTAINER).should("be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should("be.visible");
    cy.get(`${SELECTOR.GAME_PROGRESS.CONTAINER} .car-player`).each(
      (car, index) => {
        cy.wrap(car).should("have.text", expectedNames[index]);
      }
    );
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("not.be.visible");
  });
});
