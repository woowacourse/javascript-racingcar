import { onSubmitCarNames, onSubmitTryCount, onClickRestartButton } from './eventListener.js';
import { $ } from './util.js';

$('#car-name-submit-button').addEventListener('click', onSubmitCarNames);

$('#try-count-submit-button').addEventListener('click', onSubmitTryCount);

$('#restart-button').addEventListener('click', onClickRestartButton);
