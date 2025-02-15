import Controller from './controllers/Controller.js';

const start = async () => {
  const controller = new Controller();
  await controller.start();
};

start();
