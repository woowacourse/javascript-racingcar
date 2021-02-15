import { SELECTOR, MESSAGE } from "../../src/js/constants.js";

describe("시도할 횟수 입력하기", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.window().then((win) => cy.stub(win, "alert").as("windowAlert"));
    cy.get(SELECTOR.CAR_NAME.INPUT).type("EAST, WEST, SOUTH, NORTH");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
  });

  const testEachFailCase = (userInput, { errorMessage, callCount = 1 }) => {
    cy.get(SELECTOR.LAP_COUNT.INPUT).type(userInput);
    cy.get(SELECTOR.LAP_COUNT.BUTTON).click();

    cy.get("@windowAlert")
      .should("have.callCount", callCount)
      .its("lastCall")
      .should("be.calledWith", errorMessage);

    cy.get(SELECTOR.LAP_COUNT.INPUT).should("have.text", "");
    cy.get(SELECTOR.GAME_PROGRESS.FORWARD_ICON).should("not.exist");
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("be.hidden");
  };

  const testFailCaseArrayWithSameErrorMessage = (
    userInputArray,
    errorMessage
  ) => {
    userInputArray.forEach((userInput, index) =>
      testEachFailCase(userInput, {
        errorMessage,
        callCount: index + 1,
      })
    );
  };

  // TODO: "10+10"  사용자가 입력하는 것과 cypress type이 상이한 것으로 보여짐. 검토 필요
  it("시도할 횟수는 숫자이다.", () => {
    testFailCaseArrayWithSameErrorMessage(
      [" ", "+-", "ㄱ"],
      MESSAGE.LAP_COUNT.NOT_A_NUMBER
    );
  });

  it("시도할 횟수는 1이상이다.", () => {
    testFailCaseArrayWithSameErrorMessage(
      ["-1", "0", "-5.6"],
      MESSAGE.LAP_COUNT.OUT_OF_RANGE
    );
  });

  it("시도할 횟수는 20이하이다.", () => {
    testFailCaseArrayWithSameErrorMessage(
      ["21", "369", "1e3"],
      MESSAGE.LAP_COUNT.OUT_OF_RANGE
    );
  });

  it("시도할 횟수는 정수이다.", () => {
    testFailCaseArrayWithSameErrorMessage(
      ["1.342", "-2.43", "0.111111"],
      MESSAGE.LAP_COUNT.OUT_OF_RANGE
    );
  });

  it("올바른 시도할 횟수가 입력됐을 때", () => {
    cy.get(SELECTOR.LAP_COUNT.INPUT).type(12);
    cy.get(SELECTOR.LAP_COUNT.BUTTON).click();

    cy.get("@windowAlert").should("not.be.called");
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("be.visible");

    let max = -Infinity;
    cy.get(SELECTOR.GAME_PROGRESS.CAR_NAME).each(($carName) => {
      cy.wrap($carName)
        .parent()
        .children()
        .its("length")
        .then((len) => (max = Math.max(max, len)));
    });

    let winners = [];
    cy.get(SELECTOR.GAME_PROGRESS.CAR_NAME).each(($carName) => {
      cy.wrap($carName)
        .parent()
        .children()
        .its("length")
        .then((len) => {
          len === max && winners.push($carName.get(0).innerText);
        });
    });

    cy.get(`${SELECTOR.GAME_RESULT.CONTAINER} > h2`)
      .invoke("text")
      .should((text) => {
        const matched = text.match(/(?<=\s*)([^\s,]+?)(?=,\s*|\s*🏆$)/g);

        expect(winners.sort()).to.deep.equal(matched.sort());
      });
  });
});
