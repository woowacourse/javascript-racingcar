import { ID } from '../../src/constants.js';

const inputCarNames = names => {
  cy.get(`#${ID.CAR_NAMES_INPUT}`).type(names);
  cy.get(`#${ID.CAR_NAMES_SUBMIT}`).click();
};

const inputRacingCount = count => {
  cy.get(`#${ID.RACING_COUNT_INPUT}`).type(count);
  cy.get(`#${ID.RACING_COUNT_SUBMIT}`).click();
};

const names = ['june', 'poco', 'park'];

describe('자동차 경주 게임', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('자동차 이름을 입력받는다', () => {
    inputCarNames(names.join(','));
  });

  it('레이싱 횟수를 입력받는다', () => {
    inputRacingCount(10);
  });

  it('자동차 경주 결과를 출력한다', () => {
    names.every(name => {
      cy.get(`[data-name=${name}]`).should('be.visible');
    });
  });

  it('다시 시작하기 버튼을 클릭한다.', () => {
    cy.get(`#${ID.RESTART_BUTTON}`).click();
    cy.get(`#${ID.CAR_COUNTS_INPUT}`).should('have.value', '');
    cy.get(`#${ID.RACING_COUNT_INPUT}`).should('have.value', '');
    cy.get(`#${ID.RACING_STATUS}`).should('be.empty');
    cy.get(`#${ID.RACING_WINNERS}`).should('be.empty');
  });
});

describe('에러 처리를 한다', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('입력한 이름이 5글자 초과 1글자 미만일 수 없다.', () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('jun,dddddd');
    cy.get(`#${ID.CAR_NAMES_SUBMIT}`).click().then(()=>{
      expect(alertStub).to.be.called;
    });
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('jun,,');
    cy.get(`#${ID.CAR_NAMES_SUBMIT}`).click().then(()=>{
      expect(alertStub).to.be.called;
    });
  });

  it('중복된 이름은 입력이 불가능하다', () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    cy.get(`#${ID.CAR_NAMES_INPUT}`).type('jun,jun');
    cy.get(`#${ID.CAR_NAMES_SUBMIT}`).click().then(()=>{
      expect(alertStub).to.be.called;
    });
  });

  it('자동차 이름이 입력되지 않았다면 레이싱 횟수를 입력할 수 없다.', () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(5);
    cy.get(`#${ID.RACING_COUNT_SUBMIT}`).click().then(()=>{
      expect(alertStub).to.be.called;
    });
  });

  it('입력한 레이싱 횟수가 1 미만일 수 없다.', () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);
    inputCarNames('june, poco');
    cy.get(`#${ID.RACING_COUNT_INPUT}`).type(0);
    cy.get(`#${ID.RACING_COUNT_SUBMIT}`).click().then(()=>{
      expect(alertStub).to.be.called;
    });
  });
});
