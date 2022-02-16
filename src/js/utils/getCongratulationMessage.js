const getCongratulationMessage = (winners) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`🏆축하합니다! ${winners}님이 우승하셨습니다!`);
    }, 2000);
  });

export default getCongratulationMessage;
