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
          expect(alertStub.getCall(0)).to.be.calledWith('양수를 입력해주세요.');
        } else if (Math.floor(tryCount) !== tryCount) {
          expect(alertStub.getCall(0)).to.be.calledWith('정수를 입력해주세요.');
        }
      });
  });

  it('자동차 이름과 시도 횟수 입력 후 확인을 누르면 레이싱 진행 상황이 출력된다.', () => {
    cy.get('.car-name').type('east, west, south, north, mid');
    cy.get('.car-name-btn').click();
    cy.get('.try-count').type('5');
    cy.get('.try-count-btn').click();

    cy.get('.progress-container').should('be.visible');
    cy.get('.car-name')
      .invoke('val')
      .then(carNameInput => {
        cy.get('.car-player').should(
          'have.length',
          carNameInput.split(',').length,
        );
      });
  });

  it('레이싱 진행 상황과 함께 우승자가 출력된다', () => {
    const carNameString = 'east, west, south, north, mid';
    cy.get('.car-name').type(carNameString);
    cy.get('.car-name-btn').click();
    cy.get('.try-count').type('3');
    cy.get('.try-count-btn').click();

    cy.get('.result-container').should('be.visible');

    cy.document().then(doc => {
      const cars = doc.querySelectorAll('.car-player');
      const progresses = [...cars].map(car => car.parentNode.childNodes.length);
      const maxPosition = Math.max(...progresses);
      const winners = [];

      cars.forEach(car => {
        if (car.parentNode.childNodes.length === maxPosition) {
          winners.push(car.innerHTML);
        }
      });

      const winnerResult = winners.join(', ');

      cy.get('.result-container')
        .find('section')
        .find('h2')
        .contains(winnerResult);
    });
  });

  it('다시 시작하기 버튼 클릭 시 게임이 리셋된다', () => {
    cy.get('.car-name').type('east, west, south, north');
    cy.get('.car-name-btn').click();
    cy.get('.try-count').type('5');
    cy.get('.try-count-btn').click();
    cy.get('.restart-btn').click();

    cy.get('.car-name').should('have.value', '');
    cy.get('.try-count').should('have.value', '');
    cy.get('.try-count-form').should('have.css', 'display', 'none');
    cy.get('.progress-container').should('have.css', 'display', 'none');
    cy.get('.result-container').should('have.css', 'display', 'none');
  });
});
