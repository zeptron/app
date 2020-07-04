const SET_MODEL_CONFIG = "SET_MODEL_CONFIG";

const setModelConfig = (configObj) => {
  return {
    type: SET_MODEL_CONFIG,
    payload: configObj,
  };
};

export default {
  setModelConfig,
};
