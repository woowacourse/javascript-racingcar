import { SELECTOR, CLASS_NAME, NUMBER } from '../../src/utils/constants.js';

describe('입력된 자동차 이름과 시도할 횟수가 조건에 맞지 않을 때 에러 메세지가 나타나는지 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름이 공백이거나, 5자를 넘을 경우 에러 메세지를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(SELECTOR.NAME_INPUT)
      .type('{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });

    cy.get(SELECTOR.NAME_INPUT).clear();

    cy.get(SELECTOR.NAME_INPUT)
      .type('abcdefg,abc,ddd{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('자동차 이름이 중복될 경우 에러 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(SELECTOR.NAME_INPUT)
      .type('a, a{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('시도할 횟수가 0 또는 음수인 경우 에러 메세지를 띄운다', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(SELECTOR.NAME_INPUT).type('east,west,south,north{enter}');
    cy.get(SELECTOR.COUNT_INPUT)
      .type('-3{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
    cy.get(SELECTOR.COUNT_INPUT)
      .clear()
      .type('0{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it('시도할 횟수가 소수점인 경우 에러 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);
    cy.get(SELECTOR.NAME_INPUT).type('east,west,south,north{enter}');
    cy.get(SELECTOR.COUNT_INPUT)
      .type('2.8{enter}')
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});

context('입력이 완료된 후, 레이싱 결과와 우승자, 다시 시작 버튼이 올바르게 나타는지 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
    cy.get(SELECTOR.NAME_INPUT).type('east,west,south,north{enter}');
    cy.get(SELECTOR.COUNT_INPUT).type('2{enter}');
  });

  it('자동차 이름과 횟수를 입력하면, 자동차 이름이 순서에 맞게 결과로 표시된다.', () => {
    cy.get(`${SELECTOR.STEP_SECTIONS} > ${SELECTOR.STEP_SECTION}`).eq(0).children().eq(0).should('have.text', 'east');
    cy.get(`${SELECTOR.STEP_SECTIONS} > ${SELECTOR.STEP_SECTION}`).eq(1).children().eq(0).should('have.text', 'west');
    cy.get(`${SELECTOR.STEP_SECTIONS} > ${SELECTOR.STEP_SECTION}`).eq(2).children().eq(0).should('have.text', 'south');
    cy.get(`${SELECTOR.STEP_SECTIONS} > ${SELECTOR.STEP_SECTION}`).eq(3).children().eq(0).should('have.text', 'north');
  });

  it('자동차 이름과 횟수를 입력하면, 레이싱 경기 우승자가 표시된다.', () => {
    cy.get(SELECTOR.WINNER).should((p) => {
      expect(p).to.contain('최종 우승자');
    });
  });

  it('자동차 이름과 횟수를 입력하면, "다시 시작하기" 버튼이 표시된다.', () => {
    cy.get(SELECTOR.RESET_BUTTON).should('be.visible');
  });
});

context('"다시 시작하기 버튼을 클릭했을 때 초기 화면의 상태로 리셋되는지 테스트', () => {
  beforeEach(() => {
    cy.visit('index.html');
    cy.get(SELECTOR.NAME_INPUT).type('east,west,south,north{enter}');
    cy.get(SELECTOR.COUNT_INPUT).type('2{enter}');
  });

  it('"다시 시작하기" 버튼을 클릭하면, 레이싱 결과와 다시 시작하기 버튼이 사라진다.', () => {
    cy.get(SELECTOR.RESET_BUTTON)
      .click()
      .then(() => {
        cy.get(SELECTOR.STEP_SECTIONS).should('not.be.visible');
        cy.get(SELECTOR.WINNER).should('not.be.visible');
        cy.get(SELECTOR.RESET_BUTTON).should('not.be.visible');
      });
  });

  it('"다시 시작하기" 버튼을 클릭하면, 입력창들을 초기화한다.', () => {
    cy.get(SELECTOR.RESET_BUTTON)
      .click()
      .then(() => {
        cy.get(SELECTOR.NAME_INPUT).should('have.value', '');
        cy.get(SELECTOR.COUNT_INPUT).should('have.value', '');
      });
  });
});

describe('레이스 결과와 축하 메세지를 표시하는 텀이 요구하는 바와 일치하는지 테스트', () => {
  beforeEach(() => {});

  it('각 레이스의 결과 표시 전에 1초의 텀동안 로딩 애니메이션을 보여준다.', () => {
    const randomStub = cy.stub().onFirstCall().returns(0.8);
    cy.clock();
    cy.visit('index.html').then((contenWindow) => {
      cy.stub(contenWindow.Math, 'random').callsFake(randomStub);
    });
    cy.get(SELECTOR.NAME_INPUT).type('east,west,south,north{enter}');
    cy.get(SELECTOR.COUNT_INPUT).type('5{enter}');
    cy.get(`${SELECTOR.STEP_SECTION_ARROWS}`)
      .eq(0)
      .children()
      .eq(0)
      .should('have.class', CLASS_NAME.SPINNING_BACKGROUND);
    cy.tick(NUMBER.ARROW_INTERVAL_TIME + 100);
    cy.get(`${SELECTOR.STEP_SECTION_ARROWS}`)
      .eq(0)
      .children()
      .eq(0)
      .should('not.have.class', CLASS_NAME.SPINNING_BACKGROUND);
  });

  it('정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 메세지를 띄운다.', () => {
    const alertStub = cy.stub();
    cy.clock();
    cy.on('window:alert', alertStub);
    cy.visit('index.html');
    cy.get(SELECTOR.NAME_INPUT).type('east,west,south,north{enter}');
    cy.get(SELECTOR.COUNT_INPUT).type('1{enter}');
    cy.clock().then((clock) => {
      clock.tick(NUMBER.ARROW_INTERVAL_TIME + NUMBER.WINNER_ALERT_TIME + 100);
      expect(alertStub).to.be.called;
    });
  });
});
