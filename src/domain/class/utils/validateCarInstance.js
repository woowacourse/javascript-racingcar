import Car from '../Car';

const validateCarInstance = car => {
  if (!(car instanceof Car)) throw new Error('[ERROR] Car가 아님');
};

export default validateCarInstance;
