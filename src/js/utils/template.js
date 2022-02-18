import { CLASS, ID, WINNER_TEMPLATE } from './constants.js';

export const makeWinnersTemplate = (winners) => `
<div>
  <h3 class="${CLASS.WINNERS}">${WINNER_TEMPLATE(winners)}</h3>
</div>
`;

export const makeReplayButtonTemplate = () => `
<button class="${CLASS.BTN} ${CLASS.REPLAY_BTN}" id="${ID.REPLAY_BUTTON}">다시 시작하기</button>
`;

export const makeCarNamesTemplate = (carNames) => `
<div class="${CLASS.RACING_RESULTS}">
${carNames
  .map(
    (carName) => `
  <div class=${CLASS.RACING_INFO}>
    <div data-name="${carName}" class="${CLASS.CAR_NAME}">${carName}</div>
    <div class=${CLASS.LOADING}><div class=${CLASS.SPINNER}></div></div>
  </div>
`,
  )
  .join('')}
</div>
`;
