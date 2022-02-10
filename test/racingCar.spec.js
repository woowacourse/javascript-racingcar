describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('잘못된 자동차 이름을 입력한 경우, alert가 호출되어야 한다.', () => {
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        cy.get('#car-name-input').type('ab cd');

        cy.get('#car-name-submit-button')
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    });
});
