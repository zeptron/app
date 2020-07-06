import ALL_TYPES from "./actionTypes";

const setModel = (modelObj) => {
  return {
    type: ALL_TYPES.SET_MODEL,
    payload: modelObj,
  };
};

const setClasses = (classes) => {
  return {
    type: ALL_TYPES.SET_CLASSES,
    payload: classes,
  };
};

export default {
  setModel,
  setClasses,
};
