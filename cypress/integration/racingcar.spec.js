import {
  BASE_URL,
  POSITIVE_CAR_NAME_INPUT,
  POSITIVE_RACE_COUNT_INPUT,
} from "../support/constants.js";
import {
  ARROW_RENDER_DELAY_TIME,
  RESULT_RENDER_DELAY_TIME,
} from "../../src/constants/constants.js";
describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it("5글자 초과 자동차 이름을 입력한 경우 에러메세지를 확인할 수 있어야 한다.", () => {
    cy.showCarNameLengthAlert("abcdef");
  });

  it("1이상 20이하의 자연수가 아닌 경우 에러 메세지를 확인 할 수 있어야 한다.", () => {
    cy.showRaceCountOverRangeAlert("1,2,3,4,5", "-2");
  });

  it("숫자가 아닌 경우 에러 메세지를 확인 할 수 있어야 한다.", () => {
    cy.showRaceCountNotIntegerAlert("1,2,3,4,5", "aae");
  });

  it("게임을 완료하고 우승자를 알 수 있도록 한다", () => {
    cy.carNamePositiveInputEvent(POSITIVE_CAR_NAME_INPUT);
    cy.raceCountPositiveInputEvent(POSITIVE_RACE_COUNT_INPUT);

    cy.clock();
    cy.tick(POSITIVE_RACE_COUNT_INPUT * ARROW_RENDER_DELAY_TIME).then(() => {
      cy.get(".result-text").should((result) => {
        const text = result.text();
        expect(text).to.include("최종 우승자");
      });
    });
  });

  it("우승자가 화면에 표시 되고 된 난 후에 alert창으로 우승자를 알려 줄 수 있다.", () => {
    const winnerAlertStub = cy.stub();
    cy.on("window:alert", winnerAlertStub);
    cy.carNamePositiveInputEvent("sally");
    cy.raceCountPositiveInputEvent(POSITIVE_RACE_COUNT_INPUT);

    cy.clock();
    cy.get(".result-text").should((result) => {
      const resultText = result.text();
      expect(resultText).to.include("최종 우승자");
    });
    cy.tick(
      POSITIVE_RACE_COUNT_INPUT * ARROW_RENDER_DELAY_TIME +
        RESULT_RENDER_DELAY_TIME
    ).then(() => {
      expect(winnerAlertStub).to.be.calledWith(
        "게임의 우승자인 sally 축하합니다"
      );
    });
  });

  it("다시 시작하기 버튼을 눌렀을 때에 시도횟수 입력창이 보이지 않도록 한다.", () => {
    cy.carNamePositiveInputEvent(POSITIVE_CAR_NAME_INPUT);
    cy.raceCountPositiveInputEvent(POSITIVE_RACE_COUNT_INPUT);

    cy.clock();
    cy.tick(POSITIVE_RACE_COUNT_INPUT * ARROW_RENDER_DELAY_TIME).then(() => {
      cy.get(".restart-button").contains("다시 시작하기").click();
      cy.get(".race-count-input-container").should(
        "have.css",
        "display",
        "none"
      );
    });
  });
});
