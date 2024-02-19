/**
 * 깊은 동결을 해주어 불변성을 보장해주는 함수
 * @param { object } object
 * @returns { object }
 */
const deepFreeze = (object) => {
  Object.keys(object).forEach((prop) => {
    if (typeof object[prop] === 'object' && !Object.isFrozen(object[prop])) {
      deepFreeze(object[prop]);
    }
  });
  return Object.freeze(object);
};

export default deepFreeze;
