import { DOM } from '../../src/lib/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../../index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  const carNameInputProcess = (nameInput) => {
    cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).type(nameInput);
    cy.get(`#${DOM.CAR_NAME_BTN_ID}`).click();
  };

  const countInputProcess = (countInput) => {
    cy.get(`#${DOM.COUNT_INPUT_ID}`).type(countInput);
    cy.get(`#${DOM.COUNT_BTN_ID}`).click();
  };

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
    carNameInputProcess(nameInput);
    countInputProcess(countInput);

    //then
    cy.get(`#${DOM.WINNER_NAME_ID}`).should('be.visible');
  });

  it('잘못된 자동차 이름을 입력하면 에러 메지지를 보게된다.', () => {
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

  it('횟수 입력란에 1 미만의 값이 주어지면 에러 메세지를 보게된다.', () => {
    //given
    const alertStub = setAlertStub();
    const nameInput = 'bling,juunz';
    const invalidInput = -1;
    carNameInputProcess(nameInput);

    // when - then
    doesShowAlert({
      inputSelector: `#${DOM.COUNT_INPUT_ID}`,
      inputValue: invalidInput,
      btnSelector: `#${DOM.COUNT_BTN_ID}`,
      alertStub,
    });
  });

  it('재시작 버튼을 누르면 시작 화면을 보게된다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 2;

    //when
    carNameInputProcess(nameInput);
    countInputProcess(countInput);
    cy.get(`#${DOM.RESTART_BTN_ID}`).click();

    //then
    isInitialStatus();
  });

  // 자동차를 입력하여 생성하는 부분을 리팩토링 하고 나니
  // 자동차가 정상 입력된 후 카운트가 입력되면
  // 입력된 자동차들이 제대로 UI로 표시되는 지 검증하는 코드가 필요하다고 느꼈음

  // UI에 노출되는 텍스트를 테스트 하는 방법 말고, 제대로 객체가 생겼는지 검증하는 방법은 없을까 ?

  it('자동차를 정상적으로 입력하고, 카운트를 정상적으로 입력하면 자동차 텍스트들을 확인할 수 있다.', () => {
    //given
    const nameInput = 'bling,jun,zzi';
    const countInput = 2;

    //when
    carNameInputProcess(nameInput);
    countInputProcess(countInput);

    //then
    const result = nameInput.split(',').reduce((prev, current) => `${prev}${current}`, '');

    cy.get(`.${DOM.CAR_NAME_CLASS}`).should('have.text', result);
  });
});
