const userMovementView = ({ name, racingCount }) => {
  return `<div id="user-status" class="user-status" data-name=${name}>
    <div id="user-name" class="user-name">${name}</div>
    ${Array.from({ length: racingCount }, () => 0)
      .map(count => `<div id="move" class="move">⬇️</div>`)
      .join('')}
  </div>`;
};

const winnersView = winners => {
  return `<h3>🏆최종 우승자: ${winners
    .map(({ name }) => name)
    .join(',')}🏆</h3>`;
};

export { userMovementView, winnersView };
