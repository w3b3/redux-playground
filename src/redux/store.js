import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

//https://github.com/zalmoxisus/redux-devtools-extension
const store = () => createStore(rootReducer, devToolsEnhancer());
/* You may also pass an initial state to createStore, useful for server side rendering and state preloading, */
export default store;

/* how does a reducer know when to generate the next state?
The key here is the Redux store. When an action is dispatched,
the store forwards a message (the action object) to the reducer.
At this point the reducer says "oh, let's look at the type property of this action".
Then depending on the action type, the reducer produces the next state,
eventually merging the action payload into the new state. */
