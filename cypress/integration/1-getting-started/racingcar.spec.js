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

describe('자동차 경주 게임', () => {
  it('자동차 이름을 입력받는다', () => {
    inputCarNames('june, poco');
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
});
