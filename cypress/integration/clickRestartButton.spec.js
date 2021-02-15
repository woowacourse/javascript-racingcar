import { SELECTOR } from "../../src/js/constants.js";

describe("다시 시작 버튼 클릭하기", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.window().then((win) => cy.stub(win, "alert").as("windowAlert"));
    cy.get(SELECTOR.CAR_NAME.INPUT).type("EAST, WEST, SOUTH, NORTH");
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get(SELECTOR.LAP_COUNT.INPUT).type(5);
    cy.get(SELECTOR.LAP_COUNT.BUTTON).click();

    cy.clock().then((clock) => {
      for (let i = 0; i < 5; i++) {
        cy.get(SELECTOR.GAME_PROGRESS.SPINNER).should("be.visible");
        cy.tick(800);
        cy.get(SELECTOR.GAME_PROGRESS.SPINNER).should("not.be.visible");
        cy.tick(200);
      }
    });
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

    cy.clock().invoke("restore");

    const userInput = "EAST, WEST, SOUTH, NORTH";
    const expectedNames = userInput.split(",").map((name) => name.trim());

    cy.get(SELECTOR.CAR_NAME.INPUT).type(userInput);
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();

    cy.get(SELECTOR.LAP_COUNT.CONTAINER).should("be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should("be.visible");
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER)
      .get(".car-player")
      .each((car, index) => {
        cy.wrap(car).should("have.text", expectedNames[index]);
      });

    let winners = [];
    let max = -Infinity;

    const testWinnerIsCorrect = () => {
      cy.get(`${SELECTOR.GAME_RESULT.CONTAINER} > h2`)
        .invoke("text")
        .then((text) => {
          const matched = text.match(/(?<=\s*)([^\s,]+?)(?=,\s*|\s*🏆$)/g);

          // expect(winners.sort()).to.deep.equal(matched.sort());
        });
    };

    const findWhoIsWinner = ($carName, len) => {
      const [{ innerText: winnerCandidate }] = $carName;

      if (len === max) {
        winners.push(winnerCandidate);
      } else if (len > max) {
        max = len;
        winners = [winnerCandidate];
      }
    };

    cy.get(SELECTOR.LAP_COUNT.INPUT).type(5);
    cy.get(SELECTOR.LAP_COUNT.BUTTON).click();

    cy.clock().then((clock) => {
      for (let i = 0; i < 5; i++) {
        cy.get(SELECTOR.GAME_PROGRESS.SPINNER).should("be.visible");
        cy.tick(800);
        cy.get(SELECTOR.GAME_PROGRESS.SPINNER).should("not.be.visible");
        cy.tick(200);
      }
    });

    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should("be.visible");

    cy.get(SELECTOR.GAME_PROGRESS.CAR_NAME)
      .each(($carName) => {
        cy.wrap($carName)
          .parent()
          .children()
          .its("length")
          .then((len) => findWhoIsWinner($carName, len));
      })
      .then(testWinnerIsCorrect);
  });
});
