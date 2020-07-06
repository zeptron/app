import ALL_TYPES from "../actions/actionTypes";

const currentModel = (state = {}, action) => {
  switch (action.type) {
    case ALL_TYPES.SET_MODEL:
      return {
        ...state,
        model: action.payload,
      };
    case ALL_TYPES.SET_CLASSES:
      return {
        ...state,
        classes: action.payload,
      };
    default:
      return state;
  }
};

export default currentModel;
