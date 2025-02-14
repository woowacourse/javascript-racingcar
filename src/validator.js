export default class Validator {
  static validateCarName(rawName) {
    const nameList = rawName.split(',').map(name => name.trim());
    if(nameList.length < 2)throw new Error("[ERROR] 2개 이상의 자동차 이름을 입력해야합니다.");
    for (const name of nameList) {
      if (name.length > 5) throw new Error("[ERROR] 자동차의 이름은 5자 이하만 가능합니다.");
      if (name.length === 0)throw new Error("[ERROR] 자동차의 이름은 0자 초과여야 합니다.");
    }
    
  }

  static validateCount(rawCount) {
    const count = Number(rawCount);
    if (Number.isNaN(count)) throw new Error("[ERROR] 횟수는 숫자만 입력하실 수 있습니다.");
    if (count <= 0) throw new Error("[ERROR] 0번은 시도하실수 없습니다.");
  }
}
