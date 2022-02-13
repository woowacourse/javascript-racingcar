const moveView = racingCount =>
  Array.from({ length: racingCount }, () => 0)
    .map(_ => `<div id="move" class="move">⬇️</div>`)
    .join('');

const userStatusView = ({
  name,
  racingCount,
}) => `<div id="user-status" class="user-status" data-name=${name}>
    <div id="user-name" class="user-name">${name}</div>
    ${moveView(racingCount)}
  </div>`;

const winnersView = winners =>
  `<h3>🏆최종 우승자: ${winners.map(({ name }) => name).join(',')}🏆</h3>`;

export { userStatusView, winnersView };
