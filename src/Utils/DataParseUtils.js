class DataParseUtils {
  static parseWinner(result) {
    const max = Math.max(...result.values());
    const winners = Array.from(result.keys()).filter(
      name => result.get(name) === max,
    );

    return winners;
  }
}

module.exports = DataParseUtils;
