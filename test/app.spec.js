import { SELECTOR } from '../src/js/constants/selector.js';

describe('기본 사용 순서 체크 (E2E)', () => {
  before(() => {
    cy.visit('./');
  });

  it('자동차의 이름을 입력할 수 있어야한다.', () => {
    // 입력 & 클릭
    cy.get(SELECTOR.CAR_NAME_INPUT).type('compy, usage');
    cy.get(SELECTOR.CAR_NAME_BUTTON).click();

    // 비활성화 체크
    cy.get(SELECTOR.CAR_NAME_INPUT)
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
  });

  it('이동 횟수를 입력할 수 있어야한다.', () => {
    // 입력 & 클릭
    cy.get(SELECTOR.RACE_TIME_INPUT).type('5');
    cy.get(SELECTOR.RACE_TIME_BUTTON).click();

    // 비활성화 체크
    cy.get(SELECTOR.RACE_TIME_INPUT)
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
    cy.get(SELECTOR.RACE_TIME_BUTTON)
      .invoke('attr', 'disabled')
      .should('eq', 'disabled');
  });

  it('자동차 이름과 이동 횟수를 입력했다면 결과가 출력되어야 한다.', () => {
    cy.get(SELECTOR.RACE_CONTAINER)
      .invoke('attr', 'data-state')
      .should('eq', 'on');

    cy.get(SELECTOR.RESULT_CONTAINER)
      .invoke('attr', 'data-state')
      .should('eq', 'on');

    cy.get(SELECTOR.RACE_ADVANCE).contains('⬇️️');
    cy.get(SELECTOR.WINNERS).contains('최종 우승자');
  });

  it('게임을 재시작할 수 있어야 한다.', () => {
    cy.get(SELECTOR.RETRY_BUTTON).click();

    cy.get(SELECTOR.CAR_NAME_INPUT)
      .invoke('attr', 'disabled')
      .should('eq', undefined);
    cy.get(SELECTOR.CAR_NAME_BUTTON)
      .invoke('attr', 'disabled')
      .should('eq', undefined);

    cy.get(SELECTOR.CAR_NAME_INPUT).should('have.text', '');

    cy.get(SELECTOR.RACE_TIME_INPUT)
      .invoke('attr', 'disabled')
      .should('eq', undefined);
    cy.get(SELECTOR.RACE_TIME_BUTTON)
      .invoke('attr', 'disabled')
      .should('eq', undefined);

    cy.get(SELECTOR.RACE_TIME_INPUT).should('have.text', '');
  });
});

/*
describe('입력 예외사항 체크 (Unit)', () => {
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
