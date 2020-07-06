import currentModelConfig from "./currentModelConfig";
import currentModel from "./currentModel";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentModelConfig,
  currentModel,
});

export default rootReducer;
