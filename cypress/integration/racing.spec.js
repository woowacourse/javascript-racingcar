describe('자동차 경주', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5501');
  });

  function clickAfterTypeCar(carNames = 'east, west, south, north') {
    if (carNames) {
      cy.get('.car-name').type(carNames);
    }
    cy.get('.car-name-btn').click();
  }

  function clickAfterTypeTryCount(tryCount = 5) {
    if (tryCount) {
      cy.get('.try-count').type(tryCount);
    }
    cy.get('.try-count-btn').click();
  }

  function exceptionAlert(className, alertMessage) {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get(className)
      .invoke('val')
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(alertMessage);
      });
  }

  function resetUI() {
    cy.get('.car-name').should('have.value', '');
    cy.get('.try-count').should('have.value', '');
    cy.get('.try-count-form').should('have.css', 'display', 'none');
    cy.get('.progress-container').should('have.css', 'display', 'none');
    cy.get('.result-container').should('have.css', 'display', 'none');
  }

  it('처음에 페이지에 접속하면 input이 전부 비워져 있고, result창은 숨겨져 있다.', () => {
    resetUI();
  });

  it('사용자가 자동차 이름을 입력하면 시도 횟수 입력란이 나타난다.', () => {
    clickAfterTypeCar();
    cy.get('.try-count-form').should('have.css', 'display', 'block');
  });

  it('자동차 이름은 5자 이하여야 한다.', () => {
    clickAfterTypeCar('easttt, west, south, north');
    exceptionAlert('.car-name', '자동차 이름을 5자 이하로 입력해 주세요.');
  });

  it('자동차 이름에 빈 문자열이 들어가면 안된다.', () => {
    clickAfterTypeCar('');
    exceptionAlert('.car-name', '자동차 이름을 입력해주세요.');
  });

  it('자동차 이름과 시도 횟수 입력 후 확인을 누르면 레이싱 진행 상황이 출력된다.', () => {
    clickAfterTypeCar();
    clickAfterTypeTryCount();

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

  it('시도 횟수에 빈 문자열을 입력하면 안 된다.', () => {
    clickAfterTypeCar();
    clickAfterTypeTryCount('');
    exceptionAlert('.try-count', '시도 횟수를 입력해주세요.');
  });

  it('시도 횟수는 양수여야 한다.', () => {
    clickAfterTypeCar();
    clickAfterTypeTryCount(-1);
    exceptionAlert('.try-count', '양수를 입력해주세요.');
  });

  it('시도 횟수는 정수여야 한다.', () => {
    clickAfterTypeCar();
    clickAfterTypeTryCount(0.2);
    exceptionAlert('.try-count', '정수를 입력해주세요.');
  });

  it('레이싱 진행 상황과 함께 우승자가 출력된다', () => {
    clickAfterTypeCar();
    clickAfterTypeTryCount();

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
    clickAfterTypeCar();
    clickAfterTypeTryCount();
    cy.get('.restart-btn').click();

    resetUI();
  });
});
