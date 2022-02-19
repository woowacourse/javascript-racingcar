import { $, $$ } from './util.js';
import { SCREEN_CMD } from './constant.js';
import template from './template.js';

const render = {
    showTryForm() {
        $('#app').classList.add(SCREEN_CMD.SHOW_TRT);
    },
    showResultArea() {
        $('#app').classList.add(SCREEN_CMD.SHOW_RESULT);
    },
    reset() {
        $('#app').classList.remove(SCREEN_CMD.SHOW_TRT, SCREEN_CMD.SHOW_RESULT);
    },
    appendTrack(cars) {
        $('#track-area').innerHTML = template.track(cars);
    },
    updateTrack(carRunResults) {
        $$('.car-track .car-steps').forEach(($track, index) => {
            if (!carRunResults[index]) return;

            $track.insertAdjacentHTML('beforeend', template.step());
        });
    },
    onLoading() {
        $$('.car-track .car-steps').forEach(($track) => {
            $track.insertAdjacentHTML('beforeend', template.loading());
        });
    },
    offLoading() {
        $$('.car-track .car-steps').forEach(($track) => {
            $track.removeChild($track.lastElementChild);
        });
    },
    renderWinners(winners) {
        $('#winners').innerText = winners.join(',');
    },
};

export default render;
