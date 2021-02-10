import RacingCarGameModel from "./RacingCarGame/RacingCarGameModel.js";

export const getRacingCarGameModel = (() => {
  let model = null;

  return () => {
    if (model === null) {
      model = new RacingCarGameModel();
    }
    return model;
  };
})();

export default {
  getRacingCarGameModel,
};
