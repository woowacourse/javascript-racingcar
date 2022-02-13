import { DOM } from '../../src/lib/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../../index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  const setAlertStub = () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    return alertStub;
  };

  // then function
  const doesShowAlert = ({ inputSelector, inputValue, btnSelector, alertStub }) => {
    // when
    cy.get(inputSelector).type(inputValue);

    // then
    cy.get(btnSelector)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  };

  const isInitialStatus = () => {
    cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).should('not.have.text');
    cy.get(`.${DOM.CAR_PROGRESS_CLASS}`).should('not.exist');
    cy.get(`.${DOM.WINNER_CONTAINER_ID}`).should('not.exist');
    cy.get(`#${DOM.COUNT_INPUT_ID}`).should('not.be.visible');
  };

  it('게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 1;

    //when
    cy.inputNames(nameInput);
    cy.inputCount(countInput);

    //then
    cy.get(`#${DOM.WINNER_NAME_ID}`).should('be.visible');
  });

  it('잘못된 자동차 이름을 입력하면 alert가 호출되어야 한다.', () => {
    //given
    const alertStub = setAlertStub();
    const invalidInput = 'juunzzi';

    // when - then
    doesShowAlert({
      inputSelector: `#${DOM.CAR_NAME_INPUT_ID}`,
      inputValue: invalidInput,
      btnSelector: `#${DOM.CAR_NAME_BTN_ID}`,
      alertStub,
    });
  });

  it('횟수 입력란에 1 미만의 값이 주어지면 alert가 호출되어야 한다.', () => {
    //given
    const alertStub = setAlertStub();
    const nameInput = 'bling,juunz';
    const invalidInput = -1;
    cy.inputNames(nameInput);

    // when - then
    doesShowAlert({
      inputSelector: `#${DOM.COUNT_INPUT_ID}`,
      inputValue: invalidInput,
      btnSelector: `#${DOM.COUNT_BTN_ID}`,
      alertStub,
    });
  });

  it('재시작 버튼을 누르면 처음 상태로 돌아가야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 2;

    //when
    cy.inputNames(nameInput);
    cy.inputCount(countInput);
    cy.get(`#${DOM.RESTART_BTN_ID}`).click();

    //then
    isInitialStatus();
  });
});
