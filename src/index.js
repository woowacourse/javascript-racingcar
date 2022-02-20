import {
    onSubmitCarNames,
    onKeyUpCarNamesInput,
    onSubmitTryCount,
    onClickRestartButton,
} from './eventListener.js';
import { $, onSubmitAfterPreventDefault } from './util.js';

$('#input-form-name').addEventListener('submit', onSubmitAfterPreventDefault(onSubmitCarNames));
$('#car-name-input').addEventListener('keyup', onKeyUpCarNamesInput);

$('#input-form-try').addEventListener('submit', onSubmitAfterPreventDefault(onSubmitTryCount));

$('#restart-button').addEventListener('click', onClickRestartButton);
