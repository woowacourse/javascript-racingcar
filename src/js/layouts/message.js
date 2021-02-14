class Message {
  winnerMessage(winners) {
    return `${winners.join(", ")} 가 우승했습니다!`;
  }
}

export default Message;
