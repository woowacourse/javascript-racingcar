import { onSubmitCarNames, onSubmitTryCount, onClickRestartButton } from './eventListener.js';
import { $, onSubmitClickedEnter } from './util.js';

$('#car-name-submit-button').addEventListener('click', onSubmitCarNames);
$('#car-name-input').addEventListener('keyup', onSubmitClickedEnter(onSubmitCarNames));

$('#try-count-submit-button').addEventListener('click', onSubmitTryCount);
$('#try-count-input').addEventListener('keyup', onSubmitClickedEnter(onSubmitTryCount));

$('#restart-button').addEventListener('click', onClickRestartButton);
