import { CONGRATS_MESSAGE_TIME_INTERVAL, ONE_ROUND_TIME_INTERVAL } from '../../src/constants/game-condition';
import { SELECTOR } from '../../src/constants/selector';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = "../../index.html";
  const raceCount = 1;

  beforeEach(() => {
    cy.clock();
    cy.visit(baseUrl);
  });

  /* 우승자 확인 */
  it("게임을 완료하고 우승자를 확인할 수 있어야 한다.", () => {
    cy.normalWorking("tt,sally", raceCount);
    cy.tick(raceCount * ONE_ROUND_TIME_INTERVAL).then(() => {
      cy.get(SELECTOR.RESULT_TEXT).should((result) => {
        const text = result.text();
        expect(text).to.include('최종 우승자');
      });
    });
  });

  /* 차 이름 */
  it("자동차 이름의 최대 길이(5글자)를 초과한 값을 입력한 경우 alert로 사용자에게 피드백을 해야 한다.", () => {
    cy.showCarNameAlert("abcdef");
  });

  /* 시도 횟수 */
  it("시도 횟수 입력값이 범위를 벗어날 경우(1이상 20이하의 자연수) alert로 사용자에게 피드백을 해야 한다.", () => {
    cy.showRaceCountAlert('1,2,3,4,5', "-2");
  });

  it("시도 횟수 입력값이 숫자가 아닌 경우 alert로 사용자에게 피드백을 해야 한다.", () => {
    cy.showRaceCountAlert('1,2,3,4,5','aae');
  });

  /* 다시 시작 */
  it("다시 시작하기 버튼을 눌렀을 때에 race-count-input-container 요소가 display none이어야 한다", () => {
    cy.normalWorking("tt,sally", raceCount);
    cy.tick(raceCount * ONE_ROUND_TIME_INTERVAL).then(() => {
      cy.get(SELECTOR.RESTART_BUTTON).click();
      cy.get(SELECTOR.RACE_COUNT_INPUT_CONTAINER).should('not.have.css', 'display', 'flex');
    })
  });

  /* 축하 메세지 */
  it("자동차 경주 우승자가 나오고 2초 후에 축하 메세지가 나와야 한다.", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.normalWorking("tt,sally", raceCount);
    cy.tick(raceCount * ONE_ROUND_TIME_INTERVAL + CONGRATS_MESSAGE_TIME_INTERVAL).then(() => {
      expect(alertStub).to.be.called;
    });
  });
});
