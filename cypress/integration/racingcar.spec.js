it("5글자 초과 자동차 이름을 입력한 경우 alert이 호출되어야 한다.", () => {
    cy.visit('index.html');
    
    const alertStub = cy.stub();
    const invalidInput = "abcdef";

    cy.on("window:alert", alertStub);
    
    cy.get("#car-name-input").type(invalidInput);
    
    cy.get("#car-name-button")
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
    });
});

it("5개 초과하여 자동차를 입력한 경우 alert이 호출되어야 한다.", () => {
  cy.visit('index.html');
  
  const alertStub = cy.stub();
  const invalidInput = "a,  b, c,d,e,f";

  cy.on("window:alert", alertStub);
  
  cy.get("#car-name-input").type(invalidInput);
  
  cy.get("#car-name-button")
    .click()
    .then(() => {
      expect(alertStub).to.be.called;
  });
});