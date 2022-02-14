import { DOM } from '../../src/lib/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../../index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // then function
  const isInitialStatus = () => {
    cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).should('not.have.text');
    cy.get(`#${DOM.COUNT_INPUT_ID}`).should('not.be.visible');
    cy.get(`.${DOM.CAR_PROGRESS_CLASS}`).should('not.exist');
    cy.get(`.${DOM.WINNER_CONTAINER_ID}`).should('not.exist');
  };

  it('올바른 자동차 이름과 횟수를 입력하면 게임이 진행되고 우승자를 확인할 수 있어야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 1;

    //when
    cy.inputNames({ nameInput });
    cy.inputCount({ countInput });

    //then
    cy.get(`#${DOM.WINNER_NAME_ID}`).should('be.visible');
  });

  it('잘못된 자동차 이름을 입력하면 게임이 진행되지 않고 실패 피드백을 전달한다.', () => {
    //given
    const invalidInput = 'juunzzi';

    //then - expect alert
    cy.inputNames({ nameInput: invalidInput, isInvalidName: true });
  });

  it('횟수 입력란에 1 미만의 값을 입력하면 게임이 진행되지 않고 실패 피드백을 전달한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const invalidCountInput = -1;

    //when
    cy.inputNames({ nameInput });

    //then - expect alert
    cy.inputCount({ countInput: invalidCountInput, isInvalidCount: true });
  });

  it('재시작 버튼을 누르면 진행된 게임 정보가 지워지고 다시 게임을 진행할 수 있는 상태가 되어야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 2;

    //when
    cy.inputNames({ nameInput });
    cy.inputCount({ countInput });
    cy.get(`#${DOM.RESTART_BTN_ID}`).click();

    //then
    isInitialStatus();
  });
});
