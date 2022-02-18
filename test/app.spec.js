import SELECTOR from '../src/js/constants/selector.js';

function carNameFormAbledCheck() {
  cy.get(SELECTOR.CAR_NAME_INPUT)
    .invoke('attr', 'disabled')
    .should('eq', undefined);
  cy.get(SELECTOR.CAR_NAME_BUTTON)
    .invoke('attr', 'disabled')
    .should('eq', undefined);
}

function carNameFormDisabledCheck() {
  cy.get(SELECTOR.CAR_NAME_INPUT)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
  cy.get(SELECTOR.CAR_NAME_BUTTON)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
}

function raceTimeFormDisabledCheck() {
  cy.get(SELECTOR.RACE_TIME_INPUT)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
  cy.get(SELECTOR.RACE_TIME_BUTTON)
    .invoke('attr', 'disabled')
    .should('eq', 'disabled');
}

describe('기본 사용 순서 체크', () => {
  before(() => {
    cy.visit('./');
  });

  it('자동차의 이름을 입력 후 입력란과 버튼이 비활성화 되어야한다.', () => {
    cy.get(SELECTOR.CAR_NAME_INPUT).type('compy, usage');
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    carNameFormDisabledCheck();
  });

  it('이동 횟수 입력 후 입력란과 버튼이 비활성화 되어야한다.', () => {
    cy.get(SELECTOR.RACE_TIME_INPUT).type('5');
    cy.get(SELECTOR.RACE_TIME_BUTTON).click();

    raceTimeFormDisabledCheck();
  });

  it('경주가 종료되면 우승자를 확인할 수 있어야한다.', () => {
    cy.wait(5000).then(() => {
      cy.get(SELECTOR.RACE_WINNER_DISPLAY).should(($element) => {
        const text = $element.text();

        expect(text).to.include('🏆 최종 우승자: ');
        expect(text).not.to.eq('🏆 최종 우승자: 🏆');
      });
    });
  });

  it('경주가 종료되고 2초 후 축하 메시지가 표시되어야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.wait(2000).then(() => {
      expect(stub).to.be.called;
    });
  });

  it('다시하기 버튼을 누르면 초기 상태로 돌아가야 한다.', () => {
    cy.get(SELECTOR.RACE_REPLAY_BUTTON).click();

    carNameFormAbledCheck();
    raceTimeFormDisabledCheck();
  });
});

describe('예외 처리 체크', () => {
  before(() => {
    cy.visit('./');
    cy.reload();
  });

  it('자동차의 이름은 빈칸일 수 없다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('자동차의 이름은 유일해야 한다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get(SELECTOR.CAR_NAME_INPUT).type('usage, usage, compy');
    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('자동차의 이름은 5자를 초과할 수 없다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get(SELECTOR.CAR_NAME_INPUT).type('usageness, usage, compy');
    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('시도 횟수는 빈칸일 수 없다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.reload();

    cy.get(SELECTOR.CAR_NAME_INPUT).type('compy, usage');
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    cy.get(SELECTOR.RACE_TIME_BUTTON)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });
});
