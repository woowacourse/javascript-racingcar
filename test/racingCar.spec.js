describe('구현 결과가 요구사항과 일치해야 한다.', () => {
    const baseURL = 'index.html';
    const SELECTOR = {
        CAR_NAME_INPUT: '#car-name-input',
        TURN_COUNT_INPUT: '#turn-count-input',
        CAR_NAME_SUBMIT_BUTTON: '#car-name-submit-button',
        TURN_COUNT_SUBMIT_BUTTON: '#turn-count-submit-button',
        CAR_TRACK: '.car-track',
        CAR_STEP_CONTAINER: '.car-steps',
        WINNERS: '#winners',
        RESTART_BUTTON: '#restart-button',
        LOADER: '.loader',
    };

    beforeEach(() => {
        cy.visit(baseURL);
    });

    context('게임 실행 결과 출력에 대한 테스트', () => {

        const CAR_NAMES = ['우아한', '테크', '코스', '소피아'];
        const TURN_COUNT = 10;

        const playGameCorrectly = () => {
            cy.get(SELECTOR.CAR_NAME_INPUT).type(CAR_NAMES.join(','));
            cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
            cy.get(SELECTOR.TURN_COUNT_INPUT).type(TURN_COUNT);
            cy.get(SELECTOR.TURN_COUNT_SUBMIT_BUTTON).click();
        }

        it('사용자 입력이 모두 끝나면, 각 자동차의 이름이 출력되어야 한다.', () => {
            // when
            playGameCorrectly();

            cy.get(SELECTOR.CAR_TRACK)
                // then
                .should('have.length', CAR_NAMES.length)
                .each((track, index) => {
                    cy.wrap(track).within(() => {
                        // then
                        cy.contains(CAR_NAMES[index]).should('exist');
                    })
                }
            );
        });

        it('각 턴이 진행되는 동안, 로딩 애니메이션이 보여야 한다.', () => {
            // when
            cy.clock();
            playGameCorrectly();

            cy.tick(500);
            for (let i = 0; i < TURN_COUNT; i += 1) {
                // then
                cy.get(SELECTOR.LOADER).should('exist');
                cy.tick(1000);
            }
            // then
            cy.get(SELECTOR.LOADER).should('not.exist');
        });

        it('게임이 끝나고 2초 뒤, 축하 메세지 창이 떠야 한다.', () => {
            // given
            const alertStub = cy.stub();
            cy.on('window:alert', alertStub);
            cy.clock();

            // when
            playGameCorrectly();
            
            cy.tick((TURN_COUNT + 2) * 1000).then(() => {
                // then
                expect(alertStub).to.be.called;
            })
        });
        
        it('다시 시도하기 버튼을 클릭하면, 게임이 초기화되어야 한다.', () => {
            // given
            cy.clock();

            // when
            playGameCorrectly();
            cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', CAR_NAMES.join(','));
            cy.get(SELECTOR.TURN_COUNT_INPUT).should('have.value', TURN_COUNT);
            cy.tick(TURN_COUNT * 1000);
            cy.get(SELECTOR.RESTART_BUTTON).click();

            // then
            cy.get(SELECTOR.CAR_NAME_INPUT).should('have.value', '');
            cy.get(SELECTOR.TURN_COUNT_INPUT).should('have.value', '');
        })

    })

    context('입력 예외 처리에 대한 테스트', () => {

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
        
        const carNameFormValidationMessageTest = (inputValue, validationMessage) => () => {
            // given
            const alertStub = cy.stub();
            cy.on('window:alert', alertStub);
    
            // when
            inputValue && cy.get(SELECTOR.CAR_NAME_INPUT).type(inputValue);
    
            // then
            cy.get(SELECTOR.CAR_NAME_INPUT).then((input) => {
                expect(input[0].validationMessage).to.be.eq(validationMessage);
            })
        }

        const turnCountFormValidationMessageTest = (inputValue, validationMessage) => () => {
            // given
            const alertStub = cy.stub();
            const CAR_NAMES = '우아한, 테크, 코스, 소피아';
            cy.on('window:alert', alertStub);
    
            // when
            cy.get(SELECTOR.CAR_NAME_INPUT).type(CAR_NAMES);
            cy.get(SELECTOR.CAR_NAME_SUBMIT_BUTTON).click();
            inputValue && cy.get(SELECTOR.TURN_COUNT_INPUT).type(inputValue);

            // then
            cy.get(SELECTOR.TURN_COUNT_SUBMIT_BUTTON).click()
            cy.get(SELECTOR.TURN_COUNT_INPUT).then((input) => {
                expect(input[0].validationMessage).to.be.eq(validationMessage);
            })
        }

        it('공백이 포함된 자동차 이름을 입력하면, 에러 메시지를 확인할 수 있어야 한다.', carNameFormAlertTest('테크 코스'));

        it('5자 초과의 자동차 이름을 입력하면, 에러 메시지를 확인할 수 있어야 한다.', carNameFormAlertTest('우아한테크코스'));
    
        it('자동차 이름을 입력하지 않고 제출하면, 에러 메시지를 확인할 수 있어야 한다.', 
            carNameFormValidationMessageTest('', '이 입력란을 작성하세요.')
        );
    
        it(
            '전진 시도 횟수 입력이 소숫점 자리를 가진 경우, 에러 메시지를 확인할 수 있어야 한다.',
            turnCountFormValidationMessageTest(12.456, '유효한 값을 입력해 주세요. 가장 근접한 유효 값 2개는 12 및 13입니다.'),
        );
    
        it('전진 시도 횟수 입력이 음수인 경우, 에러 메시지를 확인할 수 있어야 한다.', 
            turnCountFormValidationMessageTest(-12, '값은 1 이상이어야 합니다.')
        );
    
        it('전진 시도 횟수를 입력하지 않고 제출하면, 에러 메시지를 확인할 수 있어야 한다.', 
            turnCountFormValidationMessageTest('', '이 입력란을 작성하세요.')
        );

    })
});
