import { onSubmitCarNames, onSubmitTryCount, onClickRestartButton } from './eventListener.js';
import { $ } from './util.js';
import { KEYCODE_ENTER } from './constant.js';

const onSubmitClickedEnter = (onSubmit) => (e) => {
    if (e.keyCode === KEYCODE_ENTER) {
        onSubmit();
    }
};

$('#car-name-submit-button').addEventListener('click', onSubmitCarNames);
$('#car-name-input').addEventListener('keyup', onSubmitClickedEnter(onSubmitCarNames));

$('#try-count-submit-button').addEventListener('click', onSubmitTryCount);
$('#try-count-input').addEventListener('keyup', onSubmitClickedEnter(onSubmitTryCount));

$('#restart-button').addEventListener('click', onClickRestartButton);
