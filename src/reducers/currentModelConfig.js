const currentModelConfig = (state = {}, action) => {
  switch (action.type) {
    case "SET_MODEL_CONFIG":
      return {
        ...state,
        modelConfig: action.payload,
      };
    default:
      return state;
  }
};

export default currentModelConfig;
