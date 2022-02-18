/*
  리팩터링 하기
  - 선택자 상수 분리.
*/

import SELECTOR from '../src/js/constants/selector.js';

describe('기본 사용 순서 체크', () => {
  before(() => {
    cy.visit('./');
  });

  it('자동차의 이름을 입력 후 입력란과 버튼이 비활성화 되어야한다.', () => {
    // 입력 & 클릭
    cy.get('#car-name-input').type('compy, usage');
    cy.get('#car-name-button').click();

    // 비활성화 체크
    cy.get('#car-name-input')
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
    cy.get('#car-name-button')
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
  });

  it('이동 횟수 입력 후 입력란과 버튼이 비활성화 되어야한다.', () => {
    // 입력 & 클릭
    cy.get('#race-time-input').type('5');
    cy.get('#race-time-button').click();

    // 비활성화 체크
    cy.get('#race-time-input')
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
    cy.get('#race-time-button')
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
  });

  it('경주가 종료되면 우승자를 확인할 수 있어야한다.', () => {
    // 대기
    cy.wait(5000).then(() => {
      cy.get('#winner').should(($element) => {
        const text = $element.text();

        expect(text).to.include('🏆 최종 우승자: ');
        expect(text).not.to.eq('🏆 최종 우승자: 🏆');
      });
    });
  });

  it('경주가 종료되고 2초 후 축하 메시지가 표시되어야 한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.wait(2000).then(() => {
      expect(stub).to.be.called;
    });
  });

  it('다시하기 버튼을 누르면 초기 상태로 돌아가야 한다.', () => {
    // 입력 & 클릭
    cy.get('#retry').click();

    cy.get('#car-name-input')
      .invoke('attr', 'disabled')
      .should('eq', undefined);
    cy.get('#car-name-button')
      .invoke('attr', 'disabled')
      .should('eq', undefined);

    cy.get('#race-time-input')
      .invoke('attr', 'disabled')
      .should('eq', undefined);
    cy.get('#race-time-button')
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
  });
});

describe('예외 처리 체크', () => {
  before(() => {
    cy.visit('./');
    cy.reload();
  });

  it('자동차의 이름은 빈칸일 수 없다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    // 입력 & 클릭
    cy.get('#car-name-button')
      .click()
      .then(() => {
        // 경고창 체크
        expect(stub).to.be.called;
      });
  });

  it('자동차의 이름은 유일해야 한다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    // 입력 & 클릭
    cy.get('#car-name-input').type('usage, usage, compy');
    cy.get('#car-name-button')
      .click()
      .then(() => {
        // 경고창 체크
        expect(stub).to.be.called;
      });
  });

  it('자동차의 이름은 5자를 초과할 수 없다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    // 입력 & 클릭
    cy.get('#car-name-input').type('usageness, usage, compy');
    cy.get('#car-name-button')
      .click()
      .then(() => {
        // 경고창 체크
        expect(stub).to.be.called;
      });
  });

  it('시도 횟수는 빈칸일 수 없다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.reload();

    // 입력 & 클릭
    cy.get('#car-name-input').type('compy, usage');
    cy.get('#car-name-button').click();

    cy.get('#race-time-button')
      .click()
      .then(() => {
        // 경고창 체크
        expect(stub).to.be.called;
      });
  });
});
