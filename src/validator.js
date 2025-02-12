export default class Validator {
  static validateCarName(rawName) {
    const nameList = rawName.split(',');
    for (const name of nameList) {
      if (name.length > 5 || name.length === 0) throw new Error();
    }
  }

  static validateCount(rawCount) {
    const count = Number(rawCount);
    if (Number.isNaN(count)) throw new Error();
    if (count <= 0) throw new Error();
  }
}
