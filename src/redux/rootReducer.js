import { imagesReducer, loadingReducer, errorReducer } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  imagesReducer,
});

export default rootReducer;
