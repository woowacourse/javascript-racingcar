const CAR_NAME_MAX_LENGTH = 5;

const SCREEN_CMD = {
    show_try: 'try',
    show_result: 'result',
};

const MSG = {
    empty_car_name: '자동차 이름을 입력해주세요.',
    blank_car_name: '자동차 이름에 공백이 들어갈 수 없습니다.',
    exceed_car_name: '자동차 이름은 5자 이하입니다.',
    natural_number: '자연수를 입력해주세요.',
    positive_number: '양수를 입력해주세요.',
    no_error: 'No Error Message',
};

const SELECTOR = {
    car_name_submit_button: '#car-name-submit-button',
    try_count_submit_button: '#try-count-submit-button',
    restart_button: '#restart-button',
    car_name_input: '#car-name-input',
    try_count_input: '#try-count-input',
    app: '#app',
    track_area: '#track-area',
    winners: '#winners',
};

export {
    CAR_NAME_MAX_LENGTH, SCREEN_CMD, MSG, SELECTOR,
};
