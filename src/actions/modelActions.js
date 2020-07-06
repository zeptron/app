const SET_MODEL = "SET_MODEL";

const setModel = (modelObj) => {
  return {
    type: SET_MODEL,
    payload: modelObj,
  };
};

export default {
  setModel,
};
