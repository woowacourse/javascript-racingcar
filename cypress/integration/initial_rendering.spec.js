describe('Initial rendering test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Can render initial display.', () => {
    cy.get('.car-name-input').should('exist');
    cy.get('.car-name-btn').should('exist');
    cy.get('.count-container').should('exist');
    cy.get('.progress-container').should('exist');
    cy.get('.result-container').should('exist');
  });
});
