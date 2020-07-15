import { IMAGES } from "./constants";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

/*  An action is USUALLY a JavaScript object with two properties: type and payload. */
const getImagesReducer = (state = [], action) => {
  // if (action.type === IMAGES.LOAD_SUCCESS) {
  //   return [...state, ...action.images];
  // }
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return action.images;
    default:
      return state;
  }
};

const loadingGetImagesReducer = (state = false, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return false;
    case IMAGES.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

const errorGettingImagesReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return action.errors;
    default:
      return state;
  }
};

export { getImagesReducer, loadingGetImagesReducer, errorGettingImagesReducer };
