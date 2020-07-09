import { IMAGES } from "./constants";

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImagesSuccess = () => ({
  type: IMAGES.LOAD_SUCCESS,
});

const setImagesFail = () => ({
  type: IMAGES.LOAD_FAIL,
});

export { loadImages, setImagesFail, setImagesSuccess };
