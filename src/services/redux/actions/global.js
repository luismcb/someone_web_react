import { SET_LOADER} from "./actionTypes";

export const setLoader = (value) => ({
  type: SET_LOADER,
  content: {
    loading:value
  }
});


