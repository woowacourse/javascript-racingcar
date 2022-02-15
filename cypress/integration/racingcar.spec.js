import { ID, CLASS } from '../../src/constants/index.js';

const URL = 'http://localhost:54683/';

const triggerCarNameSubmitEvent = () => {
  cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, west, south, north, all');
  cy.get(`.${CLASS.INPUT_BTN}`).eq(0).click();
};

const triggerRacingCountSubmitEvent = () => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(5);
  cy.get(`.${CLASS.INPUT_BTN}`).eq(1).click();
};

describe('자동차 이름 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('자동차 이름을 올바르게 입력한다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, west, south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.not.be.called;
      });

    cy.get(`#${ID.RACING_COUNT_FORM}`).should('have.css', 'display', 'block');
  });

  it('자동차 이름은 최소 1개 이상 입력해야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('자동차 이름은 5자 이하만 가능하다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('woowacourse, west, south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('자동차 이름은 공백을 입력할 수 없다.', () => {
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('east, , south, north, all');

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(0)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });
});

describe('시도할 횟수 입력 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    triggerCarNameSubmitEvent();
  });

  it('시도할 횟수를 올바르게 입력한다.', () => {
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(10);

    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub).to.not.be.called;
      });
  });

  it('시도할 횟수는 공백을 입력할 수 없다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });

  it('시도할 횟수는 자연수만 입력한다.', () => {
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(-1);
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get(`.${CLASS.INPUT_BTN}`)
      .eq(1)
      .click()
      .then(() => {
        expect(stub).to.be.called;
      });
  });
});

describe('자동차 경주 진행 상황 기능 테스트', () => {
  beforeEach(() => {
    cy.visit(URL);
    triggerCarNameSubmitEvent();
    triggerRacingCountSubmitEvent();
  });

  it('자동차 이름이 올바르게 렌더링되는지 확인한다.', () => {
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(0).should('have.text', 'east');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(1).should('have.text', 'west');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(2).should('have.text', 'south');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(3).should('have.text', 'north');
    cy.get(`.${CLASS.RACING_CAR_NAME}`).eq(4).should('have.text', 'all');
  });
});
