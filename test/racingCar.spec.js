describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    const baseURL = 'index.html';
    const SELECTOR = {
        CAR_NAME_INPUT: '#car-name-input',
        TRY_COUNT_INPUT: '#try-count-input',
        CAR_NAME_SUBMIT_BUTTON: '#car-name-submit-button',
        TRY_COUNT_SUBMIT_BUTTON: '#try-count-submit-button',
        CAR_TRACK: '.car-track',
        CAR_STEP_CONTAINER: '.car-steps',
        WINNERS: '#winners',
        RESTART_BUTTON: '#restart-button',
    };

    beforeEach(() => {
        cy.visit(baseURL);
    });

    context('입력 예외처리', () => {

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
            const CAR_NAMES = '우아한, 테크, 코스, 소피아';
            cy.on('window:alert', alertStub);
    
            // when
            cy.get(SELECTOR.CAR_NAME_INPUT).type(CAR_NAMES);
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

    })

    context('View 업데이트 확인', () => {

        const CAR_NAMES = ['우아한', '테크', '코스', '소피아'];
        const TRY_COUNT = 10;

        const playGameCorrectly = () => {
            cy.get(SELECTOR.CAR_NAME_INPUT).type(CAR_NAMES.join(','));
            cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(TRY_COUNT);
            cy.get(SELECTOR.TRY_COUNT_SUBMIT_BUTTON).click();
        }

        it('사용자 입력이 모두 끝나면, 각 자동차의 이름과 위치가 출력되어야 한다.', () => {
            // when
            playGameCorrectly();

            // then
            cy.get(SELECTOR.CAR_TRACK)
                .should('have.length', CAR_NAMES.length)
                .each((track, index) => {
                    cy.wrap(track).within(() => {
                        cy.contains(CAR_NAMES[index]).should('exist');
                        cy.get(SELECTOR.CAR_STEP_CONTAINER).should('exist');
                    })
                }
            );
        });
    
        it('게임이 끝나면, 우승자가 출력되어야 한다.', () => {
            // when
            playGameCorrectly();
    
            // then
            const cars = [];
            cy.get(SELECTOR.CAR_TRACK)
                .each((track, index) => {
                    cy.wrap(track).within(() => {
                        cy.get(SELECTOR.CAR_STEP_CONTAINER).children().its('length')
                            .then((step) => {
                                cars.push({ name: CAR_NAMES[index], step })
                        });
                    })
                }
            ).then(() => {
                const maxStep = Math.max(...cars.map(car => car.step));
                const winners = cars.filter(car => car.step === maxStep).map(car => car.name).join(',');
    
                cy.get(SELECTOR.WINNERS).should('have.text', winners);
            });
        });

        
        it('다시 시도하기 버튼을 클릭하면, 게임이 초기화되어야 한다.', () => {
            // when
            playGameCorrectly();
            cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', CAR_NAMES.join(','));
            cy.get(SELECTOR.TRY_COUNT_INPUT).should('have.value', TRY_COUNT);
            cy.get(SELECTOR.RESTART_BUTTON).click();

            // then
            cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', '');
            cy.get(SELECTOR.TRY_COUNT_INPUT).should('have.value', '');
        })

    })
});
