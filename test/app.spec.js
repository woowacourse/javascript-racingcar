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

  it('자동차의 전진 기준은 0에서 9 사이의 무작위 값을 구한 후 값이 4 이상일 시 전진한다.', () => {
    // 랜덤 함수 출력 테스트
    // 전진 테스트
  });

  it('자동차의 전진 횟수에 따라 화살표를 표시한다.', () => {});

  it('전진 횟수가 가장 많은 자동차는 우승자가 된다.', () => {});
});

/*
describe('입력 예외사항 체크', () => {
  before(() => {
    cy.visit('./');
  });

  it('자동차 이름 유효성 검사 체크', () => {
    // alert 발동 리스너 등록
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    // 자동차 이름은 빈칸일 수 없다.
    cy.get('#car-name').type('');
    cy.get('#car-name-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith('자동차 이름을 입력해주세요.');
      });

    // 자동차 이름은 최소 2개 이상 입력하여야 한다.
    cy.get('#car-name').type('콤피');
    cy.get('#car-name-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          '자동차 이름을 최소 2개 이상 입력해주세요.'
        );
      });

    // 자동차 이름은 1자 미만, 5자를 초과할 수 없다.
    cy.get('#car-name').type('콤피,유세지세지세지');
    cy.get('#car-name-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          '자동차 이름은 최소 1자에서 5자까지 입력해주세요.'
        );
      });
  });

  it('시도 횟수 유효성 검사 체크', () => {
    // alert 발동 리스너 등록
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    // 시도 횟수는 빈칸일 수 없다.
    cy.get('#race-time').type('');
    cy.get('#race-time-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith('시도 횟수를 입력해주세요.');
      });

    // 시도 횟수는 숫자만 입력하여야 한다.
    cy.get('#race-time').type('야자 멈춰!');
    cy.get('#race-time-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          '시도 횟수는 숫자만 입력할 수 있습니다.'
        );
      });

    // 시도 횟수는 음수를 입력할 수 없다.
    cy.get('#car-name').type('-777');
    cy.get('#car-name-button')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledWith(
          '시도 횟수를 최소 1회 이상 입력해주세요.'
        );
      });
  });

  // 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해, 메시지를 보여준다.
});
*/
