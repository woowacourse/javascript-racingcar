import { DOM } from '../../src/lib/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../../index.html';

  beforeEach(() => {
    cy.clock();
    cy.visit(baseUrl);
  });

  const playValidGame = () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 5;

    //when
    cy.inputNames({ nameInput });
    cy.inputCount({ countInput });

    return countInput;
  };

  // then function
  const isInitialStatus = () => {
    cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).should('not.have.text');
    cy.get(`#${DOM.COUNT_INPUT_ID}`).should('not.be.visible');
    cy.get(`.${DOM.CAR_PROGRESS_CLASS}`).should('not.exist');
    cy.get(`.${DOM.WINNER_CONTAINER_ID}`).should('not.exist');
  };

  // step1 테스트
  it('올바른 자동차 이름과 횟수를 입력하면 게임이 진행되고 우승자를 확인할 수 있어야 한다.', () => {
    // when
    const totalPlaySecond = playValidGame();

    //then
    cy.tick(totalPlaySecond * 1000);
    cy.get(`#${DOM.WINNER_NAME_ID}`).should('be.visible');
  });

  it('자동차 이름을 입력하지 않으면 게임이 진행되지 않고 실패 피드백을 전달한다.', () => {
    //given
    const invalidInput = '';

    //then - expect alert
    cy.inputNames({ nameInput: invalidInput, isInvalidName: true });
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
    cy.tick(5000);
    cy.get(`#${DOM.RESTART_BTN_ID}`).click();

    //then
    isInitialStatus();
  });

  // step2 테스트
  it('올바른 자동차 이름과 횟수를 입력한 후 1초가 지나기 전에는 대기 상태여야 한다.', () => {
    // when
    playValidGame();

    cy.get(`.${DOM.SPINNER_CLASS}`).should('be.visible');
    cy.get(`.${DOM.STEP_CLASS}`, { timeout: 0 }).should('not.exist');
  });

  it('입력한 횟수의 초만큼 흐른 뒤 결과를 표시하고 2초 뒤 축하 메시지를 표시해야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    // when
    const totalPlaySecond = playValidGame();

    // then
    cy.get(`#${DOM.WINNER_NAME_ID}`, { timeout: 0 }).should('not.exist');

    // when 2
    cy.tick(totalPlaySecond * 1000);

    // then 2
    cy.get(`.${DOM.SPINNER_CLASS}`).should('not.exist');
    cy.get(`#${DOM.WINNER_NAME_ID}`).should('be.visible');

    cy.tick(2000).then(() => {
      expect(alertStub).to.be.called;
    });

    cy.on('window:alert', (text) => {
      expect(text).to.contains('🎉축하합니다! 우승자는');
    });
  });
});
