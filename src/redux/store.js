import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

//https://github.com/zalmoxisus/redux-devtools-extension
const store = () => createStore(rootReducer, devToolsEnhancer());
export default store;
