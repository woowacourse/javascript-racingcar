/**
 * @param {Promise} promise - 실행할 Promise
 * @returns {Promise<[Error|null, any|null]>}
 */
const tryCatch = (promise) =>
  promise.then((data) => [null, data]).catch((error) => [error, null]);

export { tryCatch };
