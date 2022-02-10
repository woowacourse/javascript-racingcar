describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('자동차 이름에 공백이 포함된 경우, alert가 호출되어야 한다.', () => {
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        cy.get('#car-name-input').type('ab cd');

        cy.get('#car-name-submit-button')
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    });

    it('자동차 이름이 5자가 넘는 경우, alert가 호출되어야 한다.', () => {
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        cy.get('#car-name-input').type('abcdefefsd');

        cy.get('#car-name-submit-button')
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    });

    it('전진 시도 횟수 입력이 소숫점 자리를 가진 경우, alert가 호출되어야 한다.', () => {
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        cy.get('#try-count-input').type(123.456);

        cy.get('#try-count-submit-button')
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    });
});
