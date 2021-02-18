import {
  $resultArea,
  $tryCountInput,
  $winners,
  $restartButton,
  $carNameInput,
  getSpinnerElements,
  getTrackElements,
} from '../elements.js';
import { ANIMATION_DURATION_SECOND } from '../constants.js';
import { getResultAreaTemplate, getWinnersTemplate } from '../templates.js';
import { requestFadeInAnimation } from '../animations.js';
import util from '../utils.js';

const processCarMoveAnimation = async (arrows, turnDuration) => {
  let arrowIndex = 0;
  await util.repeat(arrows.length, turnDuration, () => {
    requestFadeInAnimation(arrows[arrowIndex]);
    arrowIndex += 1;
  })
};

const takeOffSpinner = ($track) => {
  const $spinner = $track.querySelector('.spinner');
  $spinner.style.display = 'none';
};

const startCarMoveAnimation = async ($track) => {
  const arrows = Array.from($track.querySelectorAll('.forward-icon'));
  if (arrows.length !== 0) {
    await processCarMoveAnimation(arrows, ANIMATION_DURATION_SECOND);
  }
  takeOffSpinner($track);
};

const showSpinners = () => {
  const spinners = getSpinnerElements();
  Array.from(spinners).forEach(
    ($spinner) => ($spinner.style.display = 'block')
  );
};

const showRacingProgress = (tracks) => {
  return new Promise((resolve, reject) => {
    let trackCount = 0;
    for (let track of tracks) {
      startCarMoveAnimation(track).then(() => {
        if (trackCount === tracks.length - 1) {
          resolve();
        }
        trackCount += 1;
      });
    }  
  })
};

export default {
  updateResultArea(carList) {
    $resultArea.innerHTML = getResultAreaTemplate(carList);
    showSpinners();
  },

  async startRacingGameAnimation() {
    const tracks = getTrackElements();
    await showRacingProgress(tracks);
    await requestFadeInAnimation($winners);
    await requestFadeInAnimation($restartButton);
  },

  clearCarNamesInput() {
    $carNameInput.value = '';
  },

  clearTryCountInput() {
    $tryCountInput.value = '';
  },

  showWinners(winners) {
    $winners.innerText = getWinnersTemplate(winners);
  },

  showRestartButton() {
    $restartButton.style.display = '';
  },

  takeOffRestartButton() {
    $restartButton.style.display = 'none';
    $restartButton.style.opacity = '0';
  },

  takeOffWinners() {
    $winners.innerText = '';
    $winners.style.opacity = '0';
  },
};
