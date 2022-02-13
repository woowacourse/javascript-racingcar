describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    const baseURL = 'index.html';
    const SELECTOR = {
        CAR_NAME_INPUT: '#car-name-input',
        TRY_COUNT_INPUT: '#try-count-input',
        CAR_NAME_SUBMIT_BUTTON: '#car-name-submit-button',
        TRY_COUNT_SUBMIT_BUTTON: '#try-count-submit-button',
        CAR_TRACK: '.car-track',
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

    })

    context('View 업데이트 확인', () => {
        
        it('사용자 입력이 모두 끝나면, 각 자동차의 이름과 위치가 출력되어야 한다.', () => {
            // given
            const CORRECT_CAR_NAMES = '우아한, 테크, 코스, 소피아';
            const CORRECT_TRY_COUNT = 6;
            const CAR_NAMES = CORRECT_CAR_NAMES.split(',').map((name) => name.trim());
    
            // when
            cy.get(SELECTOR.CAR_NAME_INPUT).type(CORRECT_CAR_NAMES);
            cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(CORRECT_TRY_COUNT);
            cy.get(SELECTOR.TRY_COUNT_SUBMIT_BUTTON).click();
    
            // then
            cy.get('.car-track')
                .should('have.length', CAR_NAMES.length)
                .each((track, index) => {
                    cy.wrap(track).contains(CAR_NAMES[index]).should('exist');
                    cy.wrap(track).get('.car-steps').should('exist');
                }
            );
        });
    
        it('게임이 끝나면, 우승자가 출력되어야 한다.', () => {
            // given
            const CORRECT_CAR_NAMES = '우아한, 테크, 코스, 소피아';
            const CORRECT_TRY_COUNT = 6;
            const CAR_NAMES = CORRECT_CAR_NAMES.split(',').map((name) => name.trim());
    
            // when
            cy.get(SELECTOR.CAR_NAME_INPUT).type(CORRECT_CAR_NAMES);
            cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(CORRECT_TRY_COUNT);
            cy.get(SELECTOR.TRY_COUNT_SUBMIT_BUTTON).click();
    
            // then
            const cars = [];
            cy.get('.car-track')
                .each((track, index) => {
                    cy.wrap(track).within(() => {
                        cy.get('.car-step').its('length').then((step) => {
                            cars.push({ name: CAR_NAMES[index], step })
                        });
                    })
                }
            ).then(() => {
                const maxStep = Math.max(...cars.map(car => car.step));
                const winners = cars.filter(car => car.step === maxStep).map(car => car.name).join(',');
    
                cy.get('#winners').should('have.text', winners);
            });
        });

        
        it('다시 시도하기 버튼을 클릭하면, 게임이 초기화되어야 한다.', () => {
            // given
            const CORRECT_CAR_NAMES = '우아한, 테크, 코스, 소피아';
            const CORRECT_TRY_COUNT = 6;
    
            // when
            cy.get(SELECTOR.CAR_NAME_INPUT).type(CORRECT_CAR_NAMES);
            cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
            cy.get(SELECTOR.TRY_COUNT_INPUT).type(CORRECT_TRY_COUNT);
            cy.get(SELECTOR.TRY_COUNT_SUBMIT_BUTTON).click();
            cy.get('#restart-button').click();

            // then
            cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', '');
            cy.get(SELECTOR.TRY_COUNT_INPUT).should('have.value', '');
        })

    })
});
