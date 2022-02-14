import { ERROR, SELECTOR } from '../../src/utils/constants.js';

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
        expect(alertStub).to.be.calledWith(ERROR.EMPTY_INPUT);
      });
  });

  it('자동차 이름이 6자 이상인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`)
      .type('abcdefg,abc,ddd{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR.LONG_LENGTH);
      });
  });

  it('자동차 이름이 중복될 경우 alert를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`)
      .type('a, a{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR.DUPLICATE_NAME);
      });
  });

  it('횟수가 0 또는 음수인 경우 alert를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(`.${SELECTOR.INPUT_SECTION_NAME_INPUT}`).type('east,west,south,north{enter}');
    cy.get(`.${SELECTOR.INPUT_SECTION_COUNT_INPUT}`)
      .type('-3{enter}')
      .then(() => {
        expect(alertStub).to.be.calledWith(ERROR.UNDER_MIN_NUMBER);
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
        expect(alertStub).to.be.calledWith(ERROR.DECIMAL);
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

  it('자동차 이름과 횟수를 입력하면, 레이싱 경기 우승자가 표시된다.', () => {
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
