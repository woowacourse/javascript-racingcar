// import { Game } from '../../js/index.js';
import Model from '../../js/model/model';
import { getRandomNumber } from '../../js/utils/getRandomNumber.js';

describe('자동차 경주 게임', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-names-input').type('easteee,west');
    cy.get('#car-names-button').click();
    cy.on('window:alert', alertStub);
  });

  it('자동차 이름이 빈칸이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-names-input').type(' , a,b,c');
    cy.get('#car-names-button').click();
    cy.on('window:alert', alertStub);
  });

  it('시도할 횟수가 소수이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-racing-count-input').type(1.2);
    cy.get('#car-racing-count-button').click();
    cy.on('window:alert', alertStub);
  });

  it('시도할 횟수가 음수이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-racing-count-input').type(-3);
    cy.get('#car-racing-count-button').click();
    cy.on('window:alert', alertStub);
  });

  it('시도할 횟수가 문자열이면 alert을 띄운다.', () => {
    const alertStub = cy.stub();
    cy.get('#car-racing-count-input').type('a');
    cy.get('#car-racing-count-button').click();
    cy.on('window:alert', alertStub);
  });

  it('사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.', () => {
    cy.get('#car-names-input').type('east,west');
    cy.get('#car-names-button').click();
    cy.get('#car-racing-count-input').type(5);
    cy.get('#car-racing-count-button').click();
    cy.contains('다시 시작하기').should('be.visible');
  });

  it('자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.', () => {
    cy.get('#car-names-input').type('east,west');
    cy.get('#car-names-button').click();
    cy.get('#car-racing-count-input').type(5);
    cy.get('#car-racing-count-button').click();
    cy.get('#car-names').should('have.text', 'eastwest');
  });

  it('주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.', () => {
    cy.get('#car-names-input').type('east,west,south,north');
    cy.get('#car-names-button').click();
    cy.get('#car-racing-count-input').type(40);
    cy.get('#car-racing-count-button').click();
    cy.get('#car-progress').contains('⬇️️');
  });
});
