export default class CustomError extends Error {
  constructor(message, ...params) {
    super(...params);
    this.message = `[ERROR] ${message}`;
  }
}
