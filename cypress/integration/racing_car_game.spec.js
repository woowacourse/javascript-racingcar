import { MAX_CAR_NAME_EXCEEDED, CAR_NAME_EMPTY } from '../../src/scripts/constants.js';

describe('step1', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/');
  });

  it('자동차를 이름과 함께 등록한다.', () => {
    cy.get('#car-name-input').type('chris, beuc');
    cy.get('#car-name-submit').click();
    cy.get('#result-area').should('contain', 'chris');
    cy.get('#result-area').should('contain', 'beuc');
  });

  it('자동차 이름을 5자까지만 허용된다.', () => {
    cy.get('#car-name-input').type('chris, beuccol');
    cy.get('#car-name-submit').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(MAX_CAR_NAME_EXCEEDED);
    });
    cy.get('#result-area').should('have.text', '');
  });

  it('자동차 이름을 넣을 때 이름 양쪽 공백을 자동으로 제거해서 등록한다.', () => {
    cy.get('#car-name-input').type('chris,  beuc  ');
    cy.get('#car-name-submit').click();
    cy.get('#result-area').should('contain', 'chris');
    cy.get('#result-area').should('not.contain', '  beuc  ');
  });
  
  it('자동차 이름에는 빈 문자열을 넣을 수 없다.', () => {
    cy.get('#car-name-input').type(',chris,');
    cy.get('#car-name-submit').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(CAR_NAME_EMPTY);
    });
    cy.get('#result-area').should('have.text', '');
  });



  // it('AC(All Clear)버튼을 누르면 0으로 초기화', () => {
  //   cy.get('.digits').contains('2').click();
  //   cy.get('.digits').contains('2').click();
  //   cy.get('#total').should('have.text', '22');
  //   cy.get('.modifier').click();
  //   cy.get('#total').should('have.text', '0');
  // });

  // it('숫자 자리수 제한 테스트', () => {
  //   cy.get('.digits').contains('2').click();
  //   cy.get('.digits').contains('2').click();
  //   cy.get('.digits').contains('2').click();
  //   cy.get('.digits').contains('2').click();
  //   cy.on('window:alert', (txt) => {
  //     expect(txt).to.contains(OPERAND_LENGTH_EXCEEDED_LIMIT);
  //   });
  //   cy.get('#total').should('have.text', '222');
  // });
});
