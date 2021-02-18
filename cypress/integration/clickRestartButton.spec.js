import { CONSTANT, SELECTOR } from "../../src/js/constants.js";

describe("다시 시작 버튼 클릭하기", () => {
  const lapCount = 12;
  beforeEach(() => {
    cy.clock();
    cy.visit("/");
    cy.window().then((win) => cy.stub(win, "alert").as("windowAlert"));
    cy.get(SELECTOR.CAR_NAME.INPUT).type("EAST, WEST, SOUTH, NORTH");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get(SELECTOR.LAP_COUNT.INPUT).type(lapCount);
    cy.get(SELECTOR.LAP_COUNT.BUTTON).click();

    Array.from({ length: lapCount }, () =>
      cy.tick(CONSTANT.DELAY.ONE_LAP_PROGRESS)
    );
  });

  const testBackToIntialState = () => {
    cy.get(SELECTOR.TITLE.CONTAINER).should("be.visible");
    cy.get(SELECTOR.CAR_NAME.CONTAINER).should("be.visible");
    cy.get(SELECTOR.CAR_NAME.INPUT).should("have.value", "");

    cy.get(SELECTOR.LAP_COUNT.CONTAINER).should("not.be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should("not.be.visible");
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("not.be.visible");
  };

  it("다시 시작 버튼을 클릭하면 첫 화면으로 돌아간다.", () => {
    cy.get(SELECTOR.GAME_RESULT.BUTTON).click();
    testBackToIntialState();
  });

  it("다시 시작된 후, 게임을 진행하면 정상적으로 작동한다.", () => {
    cy.get(SELECTOR.GAME_RESULT.BUTTON).click();
    testBackToIntialState();

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

    const lapCount = 12;
    cy.get(SELECTOR.LAP_COUNT.INPUT).type(lapCount);
    cy.get(SELECTOR.GAME_PROGRESS.SPINNER_ICON).should("not.be.visible");

    cy.get(SELECTOR.LAP_COUNT.BUTTON).click();
    cy.get("@windowAlert").should("not.be.called");

    Array.from({ length: lapCount }, () =>
      cy.tick(CONSTANT.DELAY.ONE_LAP_PROGRESS)
    );

    cy.get(SELECTOR.GAME_PROGRESS.SPINNER_ICON).should("not.be.visible");
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

    cy.get(SELECTOR.GAME_RESULT.WINNERS)
      .invoke("text")
      .should((text) => {
        const matched = text.match(/(?<=\s*)([^\s,]+?)(?=,\s*|\s*🏆$)/g);

        expect(winners).to.deep.equal(matched);
      })
      .then(() => {
        cy.tick(CONSTANT.DELAY.CONGRATS_ALERT_CALL);
        cy.get("@windowAlert")
          .should("have.callCount", 2)
          .its("lastCall")
          .should("be.calledWith", `축하합니다! ${winners.join(", ")}`);
      });
  });
});
