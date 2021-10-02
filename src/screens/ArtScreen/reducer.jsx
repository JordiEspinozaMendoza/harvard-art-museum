import { actions } from "./actions";
import { initialState } from "./constants";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case action.GET_ART_REQUEST:
      return {
        ...state,
        isLoaded: false,
      };
    case action.GET_ART_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        item: action.payload,
        error: null,
      };
    case action.GET_ART_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
        item: null,
      };
  }
};
