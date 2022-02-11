describe('기능 요구사항', () => {
  const testCarNames = ['우디', '꼬재'];
  const racingCount = 4;

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름을 입력하고 확인 버튼을 누르면 레이스를 출력할 때 쉼표로 구분된 자동차 이름들을 같이 출력한다.', () => {
    cy.get('#car-name-input').type(testCarNames.join(',')); // '우디,꼬재'

    cy.get('#car-name-button').click();
    cy.get('.car-name').should('have.length', testCarNames.length);
    cy.get('.car-name').each((name, index) => {
      cy.wrap(name).should('have.text', testCarNames[index]);
    });
  });
});

// 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.
describe('예외 상황', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('자동차 이름이 5자보다 크면 alert를 보여준다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    const inputString = '여섯글자이름';

    cy.get('#car-name-input').type(inputString);

    cy.get('#car-name-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '자동차 이름은 1자 이상 5자 이하여야 합니다.'
        );
      });

    cy.get('#car-name-input').should('have.value', '');
    cy.get('#car-name-input').should('have.focus');
  });

  it('자동차 이름이 공백으로 이루어지면 alert를 보여준다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    const inputString = ' ';

    cy.get('#car-name-input').type(inputString);

    cy.get('#car-name-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '자동차 이름은 1자 이상 5자 이하여야 합니다.'
        );
      });
    cy.get('#car-name-input').should('have.value', '');
    cy.get('#car-name-input').should('have.focus');
  });

  it('양의 정수가 아닌 레이싱 횟수를 입력하면 alert를 보여준다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    const racingCount = '-1';

    cy.get('#racing-count-input').type(racingCount);

    cy.get('#racing-count-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '1에서 10사이의 숫자를 입력해주세요.'
        );
      });
    cy.get('#racing-count-input').should('have.value', '');
    cy.get('#racing-count-input').should('have.focus');
  });

  it('100보다 큰 레이싱 횟수를 입력하면 alert를 보여준다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    const racingCount = '101';

    cy.get('#racing-count-input').type(racingCount);

    cy.get('#racing-count-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '1에서 10사이의 숫자를 입력해주세요.'
        );
      });
    cy.get('#racing-count-input').should('have.value', '');
    cy.get('#racing-count-input').should('have.focus');
  });

  it('입력받은 자동차 이름에 중복이 있으면 alert를 보여준다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    const inputString = '우디,우디,꼬재';

    cy.get('#car-name-input').type(inputString);

    cy.get('#car-name-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '중복되는 자동차 이름은 입력할 수 없습니다.'
        );
      });
    cy.get('#car-name-input').should('have.value', '');
    cy.get('#car-name-input').should('have.focus');
  });

  it('자동차 이름을 입력하지 않고 레이싱 횟수 버튼을 누르면 alert를 보여준다.', () => {
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);
    const inputString = '5';

    cy.get('#racing-count-input').type(inputString);

    cy.get('#racing-count-button')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          '자동차 이름을 먼저 입력해주세요.'
        );
      });
    cy.get('#racing-count-input').should('have.value', '');
    cy.get('#car-name-input').should('have.focus');
  });
});
