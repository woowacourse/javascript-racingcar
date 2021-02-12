import { SELECTOR } from "../../src/js/constants.js";

describe("다시 시작 버튼 클릭하기", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.window().then((win) => cy.stub(win, "alert").as("windowAlert"));
    cy.get(SELECTOR.CAR_NAME.INPUT).type("EAST, WEST, SOUTH, NORTH");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get(SELECTOR.LAP_COUNT.INPUT).type(12);
    cy.get(SELECTOR.LAP_COUNT.BUTTON).click();
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
