import { initialState } from "./constants";
import { actions } from "./actions";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_IMAGE_HERO_HEADER_REQUEST:
      return {
        ...state,
        heroHeader: {
          ...state.heroHeader,
          loading: true,
          error: null,
        },
      };
    case actions.FETCH_IMAGE_HERO_HEADER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        heroHeader: {
          ...state.heroHeader,
          loading: false,
          error: null,
          // get random image from array
          backgroundImage:
            action.payload.records[
              Math.floor(Math.random() * action.payload.records.length)
            ],
        },
        collections: action.payload.records.slice(0, 4),
      };
    case actions.FETCH_IMAGE_HERO_HEADER_FAILURE:
      return {
        ...state,
        heroHeader: {
          ...state.heroHeader,
          loading: false,
          error: action.payload,
        },
      };
  }
};
