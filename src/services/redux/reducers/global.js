import { SET_LOADER } from "../actions/actionTypes";

const initialState = {
 loading:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, loading:state.content.loading };
    default:
      return state;
  }
}
