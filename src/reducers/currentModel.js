const currentModel = (state = {}, action) => {
  switch (action.type) {
    case "SET_MODEL":
      return {
        ...state,
        model: action.payload,
      };
    default:
      return state;
  }
};

export default currentModel;
