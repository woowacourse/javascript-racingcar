class DataParseUtils {
  static parseWinner(result) {
    const winners = [];
    const max = Math.max(...result.values());
    result.forEach((value, key) => {
      if (value === max) {
        winners.push(key);
      }
    });

    return winners;
  }
}

module.exports = DataParseUtils;
