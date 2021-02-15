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

const startArrowAnimation = (arrows, arrowIndex) => {
  requestFadeInAnimation(arrows[arrowIndex]);
};

const processCarMoveAnimation = (arrows) => {
  return new Promise((resolve, reject) => {
    let arrowIndex = 0;
    const showArrowRepeat = setInterval(async () => {
      await startArrowAnimation(arrows, arrowIndex);
      if (arrowIndex === arrows.length - 1) {
        clearInterval(showArrowRepeat);
        resolve(true);
      }
      arrowIndex += 1;
    }, ANIMATION_DURATION_SECOND * 1000);
  });
};

const takeOffSpinner = ($track) => {
  const $spinner = $track.querySelector('.spinner');
  $spinner.style.display = 'none';
};

const startCarMoveAnimation = ($track, callback) => {
  return new Promise(async (resolve, reject) => {
    const arrows = Array.from($track.querySelectorAll('.forward-icon'));
    await processCarMoveAnimation(arrows);
    takeOffSpinner($track);
    callback();
    resolve();
  });
};

const startShowWinnerAnimation = () => {
  return new Promise(async (resolve, reject) => {
    await requestFadeInAnimation($winners);
    resolve();
  });
};

const startShowRestartButtonAnimation = () => {
  return new Promise(async (resolve, reject) => {
    await requestFadeInAnimation($restartButton);
    resolve();
  });
};

const attachSpinners = () => {
  const spinners = getSpinnerElements();
  Array.from(spinners).forEach(
    ($spinner) => ($spinner.style.display = 'block')
  );
};

const showRacingProgress = (tracks) => {
  return new Promise(async (resolve, reject) => {
    let trackFinishCount = 0;
    for (let i = 0; i < tracks.length; i += 1) {
      startCarMoveAnimation(tracks[i], () => {
        if (trackFinishCount >= tracks.length - 1) {
          resolve();
        }
        trackFinishCount += 1;
      });
    }
  });
};

export default {
  updateResultArea(carList) {
    $resultArea.innerHTML = getResultAreaTemplate(carList);
    attachSpinners();
  },

  async startRacingGameAnimation() {
    return new Promise(async (resolve, reject) => {
      const tracks = getTrackElements();
      await showRacingProgress(tracks);
      await startShowWinnerAnimation();
      await startShowRestartButtonAnimation();
      resolve();
    });
  },

  clearCarNamesInput() {
    $carNameInput.value = '';
  },

  clearTryCountInput() {
    $tryCountInput.value = '';
  },

  attachWinners(winners) {
    $winners.innerText = getWinnersTemplate(winners);
  },

  attachRestartButton() {
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
