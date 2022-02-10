before(() => {
  cy.visit('/index.html');
});

const checkAlertMessage = message => {
  cy.on('window:alert', str => {
    expect(str).to.equal(message);
  });
};

const clearInput = () => {
  cy.get('#car-names-input').clear();
  cy.get('#racing-count-input').clear();
};

const inputCarNames = names => {
  cy.get('#car-names-input').type(names);
  cy.get('#car-names-submit').click();
};

const inputRacingCount = count => {
  cy.get('#racing-count-input').type(count);
  cy.get('#racing-count-submit').click();
};

const names = ['june', 'poco'];

describe('자동차 경주 게임', () => {
  it('자동차 이름을 입력받는다', () => {
    inputCarNames(names.join(','));
  });

  it('레이싱 횟수를 입력받는다', () => {
    inputRacingCount(2);
  });

  it('자동차 경주 결과를 출력한다', () => {
    names.every(name => {
      cy.get(`[data-name=${name}]`).should('be.visible');
    });
  });

  it('다시 시작하기 버튼을 클릭한다.', () => {
    cy.get('#restart-button').click();
    cy.get('#car-names-input').should('have.value', '');
    cy.get('#racing-count-input').should('have.value', '');
    cy.get('#racing-status').should('be.empty');
    cy.get('#racing-winners').should('be.empty');
  });
});

describe('에러 처리를 한다', () => {
  beforeEach(() => {
    clearInput();
  });
  it('입력한 이름이 5글자 초과일 경우 alert가 뜬다.', () => {
    inputCarNames('jun,dddddd');
    checkAlertMessage('올바르지 않은 이름입니다.');
  });

  it('입력한 이름이 1글자 미만이면 alert가 뜬다', () => {
    inputCarNames('jun,,');
    checkAlertMessage('올바르지 않은 이름입니다.');
  });

  it('자동차 이름이 입력되지 않았다면 레이싱 횟수를 입력할 수 없다.', () => {
    inputRacingCount(1);
    checkAlertMessage('자동차 이름이 입력되지 않았습니다.');
  });

  it('입력한 레이싱 횟수가 1 미만이면 alert가 뜬다', () => {
    inputCarNames('june, poco');
    inputRacingCount(0);
    checkAlertMessage('올바르지 않은 레이싱 횟수입니다');
  });
});
