describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    const baseURL = 'index.html';
    const SELECTOR = {
        CAR_NAME_INPUT: '#car-name-input',
        TRY_COUNT_INPUT: '#try-count-input',
        CAR_NAME_SUBMIT_BUTTON: '#car-name-submit-button',
        TRY_COUNT_SUBMIT_BUTTON: '#try-count-submit-button',
    };

    beforeEach(() => {
        cy.visit(baseURL);
    });

    const carNameFormAlertTest = (inputValue) => () => {
        // given
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        // when
        inputValue && cy.get(SELECTOR.CAR_NAME_INPUT).type(inputValue);

        // then
        cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON)
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    };

    const tryCountFormAlertTest = (inputValue) => () => {
        // given
        const alertStub = cy.stub();
        const CORRECT_CAR_NAMES = '우아한, 테크, 코스, 소피아';
        cy.on('window:alert', alertStub);

        // when
        cy.get(SELECTOR.CAR_NAME_INPUT).type(CORRECT_CAR_NAMES);
        cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
        inputValue && cy.get(SELECTOR.TRY_COUNT_INPUT).type(inputValue);

        // then
        cy.get(SELECTOR.TRY_COUNT_SUBMIT_BUTTON)
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    }

    it('자동차 이름에 공백이 포함된 경우, alert가 호출되어야 한다.', carNameFormAlertTest('ab cd'));

    it('자동차 이름이 5자가 넘는 경우, alert가 호출되어야 한다.', carNameFormAlertTest('abcdfesf'));

    it('자동차 이름에 공백인 경우, alert가 호출되어야 한다.', carNameFormAlertTest(''));

    it(
        '전진 시도 횟수 입력이 소숫점 자리를 가진 경우, alert가 호출되어야 한다.',
        tryCountFormAlertTest(123.456),
    );

    it('전진 시도 횟수 입력이 음수인 경우, alert가 호출되어야 한다.', tryCountFormAlertTest(-12));

    it('전진 시도 횟수 입력이 빈칸인 경우, alert가 호출되어야 한다.', tryCountFormAlertTest(''));
});
