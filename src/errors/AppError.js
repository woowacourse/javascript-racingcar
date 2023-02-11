import { format } from '../constants/Messages';

class AppError extends Error {
  constructor(message, ...args) {
    super(format(message, ...args));
    this.name = this.constructor.name;
  }
}

export default AppError;
