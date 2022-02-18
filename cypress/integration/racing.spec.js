import {
  ERROR_MESSAGE,
  ROUND_DELAY,
  SELECTOR,
  WIN_ALERT_DELAY,
} from '../../src/utils/constants.js';

describe('UI 조작 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });
  it('자동차 이름이 공백인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`)
      .type('{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.EMPTY_INPUT);
      });
  });

  it('자동차 이름이 6자 이상인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`)
      .type('abcdefg,abc,ddd{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.LONG_LENGTH);
      });
  });

  it('자동차 이름이 중복될 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`)
      .type('a, a{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.DUPLICATE_NAME);
      });
  });

  it('횟수가 0 또는 음수인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`).type('east,west,south,north{enter}');
    cy.get(`.${SELECTOR.INPUT_SECTION_COUNT_INPUT}`)
      .type('-3{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.UNDER_MIN_NUMBER);
      });
    cy.get(`.${SELECTOR.INPUT_SECTION_COUNT_INPUT}`)
      .clear()
      .type('0{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('횟수가 소수점인 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`).type('east,west,south,north{enter}');
    cy.get(`.${SELECTOR.INPUT_SECTION_COUNT_INPUT}`)
      .type('2.8{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR_MESSAGE.DECIMAL);
      });
  });

  it('자동차 경주 게임을 정상적으로 완료하고 2초 뒤에 축하 메시지를 확인할 수 있다.', () => {
    const RACE_COUNT = 2;
    const TOTAL_DELAY = ROUND_DELAY * RACE_COUNT + WIN_ALERT_DELAY;
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`).type('east,west,south,north{enter}');
    cy.get(`.${SELECTOR.INPUT_SECTION_COUNT_INPUT}`).type(`${RACE_COUNT}{enter}`);

    cy.wait(TOTAL_DELAY).then(() => {
      expect(alertStub).to.be.called;
    });
  });
});

context('화면표시 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`).type('east,west,south,north{enter}');
    cy.get(`.${SELECTOR.INPUT_SECTION_COUNT_INPUT}`).type('2{enter}');
  });
  it('자동차 이름과 횟수를 입력하면, 자동차 이름이 순서에 맞게 결과로 표시된다.', () => {
    cy.get(`.${SELECTOR.STEP_SECTIONS} > .${SELECTOR.STEP_SECTION}`)
      .eq(0)
      .children()
      .eq(0)
      .should('have.text', 'east');
    cy.get(`.${SELECTOR.STEP_SECTIONS} > .${SELECTOR.STEP_SECTION}`)
      .eq(1)
      .children()
      .eq(0)
      .should('have.text', 'west');
    cy.get(`.${SELECTOR.STEP_SECTIONS} > .${SELECTOR.STEP_SECTION}`)
      .eq(2)
      .children()
      .eq(0)
      .should('have.text', 'south');
    cy.get(`.${SELECTOR.STEP_SECTIONS} > .${SELECTOR.STEP_SECTION}`)
      .eq(3)
      .children()
      .eq(0)
      .should('have.text', 'north');
  });

  it('n회 시도할 때, n-1초 후에는 우승자가 표시되지 않는다.', () => {
    cy.wait(1000);
    cy.get(`.${SELECTOR.WINNER}`).should('not.be.visible');
  });

  it('n회 시도할 때, n-1초 후에는 우승자가 표시되지 않는다.', () => {
    cy.get(`.${SELECTOR.WINNER}`).should('not.be.visible');
  });

  it('n회 시도하면, n초 이후 레이싱 경기 우승자가 표시된다.', () => {
    cy.get(`.${SELECTOR.WINNER}`).should((p) => {
      expect(p).to.contain('최종 우승자');
    });
  });

  it('자동차 이름과 횟수를 입력하면, "다시 시작하기" 버튼이 표시된다.', () => {
    cy.get(`.${SELECTOR.RESET_BUTTON}`).should('be.visible');
  });

  it('"다시 시작하기" 버튼을 클릭하면, 레이싱 결과와 다시 시작하기 버튼이 사라진다.', () => {
    cy.get(`.${SELECTOR.RESET_BUTTON}`)
      .click()
      .then(() => {
        cy.get(`.${SELECTOR.STEP_SECTIONS}`).should('not.be.visible');
        cy.get(`.${SELECTOR.WINNER}`).should('not.be.visible');
        cy.get(`.${SELECTOR.RESET_BUTTON}`).should('not.be.visible');
      });
  });

  it('"다시 시작하기" 버튼을 클릭하면, input들을 초기화한다.', () => {
    cy.get(`.${SELECTOR.RESET_BUTTON}`)
      .click()
      .then(() => {
        cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`).should('have.value', '');
        cy.get(`.${SELECTOR.INPUT_SECTION_COUNT_INPUT}`).should('have.value', '');
      });
  });
});
