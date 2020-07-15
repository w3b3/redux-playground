import { IMAGES } from "./constants";

/* Instead of mutating the state directly, 
   you specify the mutations you want to happen with plain objects called actions. 
   Then you write a special function called a reducer to decide 
   how every action transforms the entire application's state.
 */

/* The only way to mutate the internal state is to dispatch an action. */

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const imageLoadingSuccess = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const imageLoadingFailure = (errors) => ({
  type: IMAGES.LOAD_FAIL,
  errors,
});

export { loadImages, imageLoadingSuccess, imageLoadingFailure };
