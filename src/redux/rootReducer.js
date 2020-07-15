import {
  getImagesReducer,
  loadingGetImagesReducer,
  errorGettingImagesReducer,
} from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  getImagesReducer,
  loadingGetImagesReducer,
  errorGettingImagesReducer,
});

export default rootReducer;
