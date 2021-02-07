/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
describe('레이싱 게임', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('자동차 이름을 부여하면 시도할 횟수 입력창이 노출된다.', () => {
    cy.get('#input-car-name').type('aaa,bbb,ccc');
    cy.get('#submit-car-name').click();
    cy.get('#section-race-times').should('be.visible');
  });

  it('이름은 1자이상, 5자 이하만 가능합니다.', () => {
    cy.get('#input-car-name').type(',bbbbbb,aaa');
    cy.get('#submit-car-name').click();
    cy.get('#section-race-times').should('not.to.be.visible');
  });

  it('이름은 공백일 수 없다', () => {
    cy.get('#input-car-name').type('             ');
    cy.get('#submit-car-name').click();
    cy.get('#section-race-times').should('not.to.be.visible');
  });

  it('사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.', () => {
    cy.get('#input-car-name').type('aaa,bbb,ccc');
    cy.get('#submit-car-name').click();
    cy.get('#input-race-times').type('2');
    cy.get('#submit-race-times').click();
    cy.get('#game-process-component').should('be.visible');
  });

  it('시도할 횟수는 1 이상이어야 한다.', () => {
    cy.get('#input-car-name').type('aaa,bbb,ccc');
    cy.get('#submit-car-name').click();
    cy.get('#input-race-times').type('0');
    cy.get('#submit-race-times').click();
    cy.get('#game-process-component').should('not.to.be.visible');
  });

  it('입력이 완료된 정보는 다시 입력할 수 없다.', () => {
    cy.get('#input-car-name').type('aaa,bbb,ccc');
    cy.get('#submit-car-name').click();
    cy.get('#submit-car-name').should('have.attr', 'disabled');
    cy.get('#input-race-times').type('10');
    cy.get('#submit-race-times').click();
    cy.get('#submit-race-times').should('have.attr', 'disabled');
  });

  it('자동차는 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.', () => {
    const Car = require('../../src/library/models/Car');
    const testCar = new Car('test');
    testCar.go(4);
    expect(testCar.position).to.equal(1);
    testCar.go(3);
    expect(testCar.position).to.equal(1);
  });

  it('자동차는 전진의 조건으로 0에서 9 사이에서 랜덤값을 받는다.', () => {
    const { getRandomNumber } = require('../../src/library/utils/random.js');
    for (let i = 0; i < 100; i++) {
      let randomNumber = getRandomNumber(0, 10);
      expect(randomNumber >= 0 && randomNumber < 10).be.equal(true);
    }
  });
});
