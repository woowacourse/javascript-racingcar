describe('ui-input-click-show', () => {
  before(() => {
    cy.visit('http://localhost:5500/');
  });

  it('자동차 섹션을 입력하고 버튼을 클릭하면 횟수 영역이 보여진다', () => {
    cy.get('#car-input').type('a,b,c,d');
    cy.get('#car-btn').click();
    cy.get('#count').should('have.css', 'display', 'block');
  });

  it('시도 횟수를 입력하고 버튼을 클릭하면 진행 영역이 보여진다', () => {
    cy.get('#count-input').type(5);
    cy.get('#count-btn').click();
    cy.get('#process').should('have.css', 'display', 'block');
  });

  it('자동차 이름을 입력한 순서대로 자동차들을 생성한다', () => {
    const cars = ['a', 'b', 'c', 'd'];
    cy.get('.car-player').each((v, i, arr) => {
      cy.get(v).should('have.text', cars[i]);
    });
  });

  it('1초 간격으로 게임이 진행되며, 게임이 종료되기 전까지 로딩바가 존재한다.', () => {
    // 5초 후에 게임이 종료된다고 가정
    cy.get('#result').should('have.css', 'display', 'none');
    cy.wait(2000);
    cy.get('.spinner-container').should('have.css', 'display', 'block');
    cy.get('#result').should('have.css', 'display', 'none');
    cy.wait(3000);
    cy.get('.spinner-container').should('have.css', 'display', 'none');
    cy.get('#result').should('have.css', 'display', 'block');
  });

  it('시도 횟수보다 화살표의 개수가 적거나 같아야한다', () => {
    cy.get('.process-car').each((v) => {
      if (v.find('.forward-icon').length > 0) {
        cy.get(v).find('.forward-icon').its('length').should('be.lte', 5);
      }
    });
  });

  it('가장많은 화살표를 가지고 있는 차의 이름이 우승자에 있어야 한다', () => {
    let largestCount = 0;
    cy.get('.process-car')
      .each((v) => {
        if (v.find('.forward-icon').length > largestCount) {
          largestCount = v.find('.forward-icon').length;
        }
      })
      .then(() => {
        cy.get('.process-car').each((v) => {
          if (v.find('.forward-icon').length === largestCount) {
            const winner = v.find('.car-player')[0].outerText;
            cy.get('#result-winner').contains(winner);
          }
        });
      });
  });

  it('다시 시작하기 버튼을 클릭하면 자동차 섹션만 보이고, 입력 값이 초기화된다', () => {
    // 축하 alert이 뜨는 2초 후에 다시 시작하기 버튼을 클릭할 수 있음
    cy.wait(2000);
    cy.get('#reset-btn').click();
    cy.get('#count').should('have.css', 'display', 'none');
    cy.get('#process').should('have.css', 'display', 'none');
    cy.get('#result').should('have.css', 'display', 'none');
    cy.get('#process').children().should('not.exist');
    cy.get('#car-input').should('have.value', '');
  });
});

describe('alert-check', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
    cy.window()
      .then((win) => cy.stub(win, 'alert'))
      .as('alertStub');
  });

  it('자동차 이름이 5글자 초과하면 alert 출력', () => {
    cy.get('#car-input').type('overFive,a,b,c,d');
    cy.get('#car-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '자동차 이름의 길이는 최대 5글자 입니다.',
    );
  });

  it('자동차 이름에 공백 있으면 alert 출력', () => {
    cy.get('#car-input').type('a,b,,c,d');
    cy.get('#car-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '자동차 이름은 공백이 될 수 없습니다.',
    );
  });

  it('자동차 이름에 중복 있으면 alert 출력', () => {
    cy.get('#car-input').type('a,b,a,c,d');
    cy.get('#car-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '자동차 이름은 중복이 될 수 없습니다.',
    );
  });

  it('입력한 시도 횟수가 공백이면 alert 출력', () => {
    cy.get('#car-input').type('a,b,c,d');
    cy.get('#car-btn').click();
    cy.get('#count').should('have.css', 'display', 'block');
    cy.get('#count-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '시도 횟수는 공백 혹은 문자가 될 수 없습니다.',
    );
  });

  it('입력한 시도 횟수가 0 이하면 alert 출력', () => {
    cy.get('#car-input').type('a,b,c,d');
    cy.get('#car-btn').click();
    cy.get('#count').should('have.css', 'display', 'block');
    cy.get('#count-input').type(-1);
    cy.get('#count-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '시도 횟수는 0보다 작거나 같을 수 없습니다.',
    );
  });

  it('입력한 시도 횟수가 소수면 alert 출력', () => {
    cy.get('#car-input').type('a,b,c,d');
    cy.get('#car-btn').click();
    cy.get('#count').should('have.css', 'display', 'block');
    cy.get('#count-input').type(4.21);
    cy.get('#count-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '시도 횟수는 소수가 될 수 없습니다.',
    );
  });

  it('이미 자동차 이름이 입력되어 있을 때 확인 버튼을 누르면 alert 출력', () => {
    cy.get('#car-input').type('a,b,c,d');
    cy.get('#car-btn').click();
    cy.get('#car-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '이미 자동차가 존재합니다. 시도할 횟수를 입력해주세요.',
    );
  });

  it('이미 시도 횟수가 입력되어 있을 때 확인 버튼을 누르면 alert 출력', () => {
    cy.get('#car-input').type('a,b,c,d');
    cy.get('#car-btn').click();
    cy.get('#count').should('have.css', 'display', 'block');
    cy.get('#count-input').type(4);
    cy.get('#count-btn').click();
    cy.get('#count-btn').click();
    cy.get('@alertStub').should(
      'be.calledWith',
      '이미 시도 횟수가 존재합니다. 다시 시작하려면 다시 시작하기 버튼을 클릭해주세요.',
    );
  });

  it('결과 화면이 출력된 후 2초 후에 축하 메시지 alert 출력.', () => {
    cy.get('#car-input').type('a');
    cy.get('#car-btn').click();
    cy.get('#count').should('have.css', 'display', 'block');
    cy.get('#count-input').type(3);
    cy.get('#count-btn').click();
    cy.wait(5000);
    cy.get('@alertStub').should(
      'be.calledWith',
      '🎉축하합니다. a가(이) 승리했습니다.🎉',
    );
  });
});

// TDD 방식으로 random 함수 테스트하기
