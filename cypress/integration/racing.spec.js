describe('자동차 경주', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5501');
  });

  it('처음에 페이지 접속하면 input이 전부 비워져 있고, result창은 숨겨져 있다.', () => {
    cy.get('.car-name').should('have.value', '');
    cy.get('.try-count').should('have.value', '');
    cy.get('.progress-container').should('have.css', 'display', 'none');
    cy.get('.result-container').should('have.css', 'display', 'none');
  });

  it('사용자가 자동차 이름을 입력하면 배열에 저장한다.', () => {
    cy.get('.car-name').type('east, west, south, north');
    cy.get('.car-name-btn').click();
    cy.get('.try-count-form').should('have.css', 'display', 'block');
  });

  it('자동차 이름은 5자 이하여야 한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('.car-name').type('easttt, west, south, north');
    cy.get('.car-name-btn').click();
    cy.get('.car-name')
      .invoke('val')
      .then(carNameInput => {
        const carNames = carNameInput.split(',');
        if (!carNameInput) {
          expect(alertStub.getCall(0)).to.be.calledWith(
            '자동차 이름을 입력해주세요.',
          );
        }
        if (carNames.some(name => name.trim().length > 5)) {
          expect(alertStub.getCall(0)).to.be.calledWith(
            '자동차 이름을 5자 이하로 입력해 주세요.',
          );
        }
      });
  });

  it('이동 횟수를 입력 받아서 저장한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('.car-name').type('east, west, south, north');
    cy.get('.car-name-btn').click();

    cy.get('.try-count').type('5');
    cy.get('.try-count-btn').click();
    cy.get('.try-count')
      .invoke('val')
      .then(tryCountInput => {
        const tryCount = Number(tryCountInput);
        if (!tryCountInput) {
          expect(alertStub.getCall(0)).to.be.calledWith(
            '시도 횟수를 입력해주세요.',
          );
        } else if (tryCount <= 0) {
          expect(alertStub.getCall(0)).to.be.calledWith(
            '양수를 입력해주세요.',
          );
        } else if (Math.floor(tryCount) !== tryCount) {
          expect(alertStub.getCall(0)).to.be.calledWith(
            '정수를 입력해주세요.',
          );
        }
      });
  });
});
