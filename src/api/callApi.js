import { API_URL } from "./apiUrl";
export const getOneImage = (id, actions, dispatch) => {
  const { REQUEST, SUCCESS, FAILURE } = actions;
  try {
    dispatch({
      type: REQUEST,
    });
    fetch(
      `${API_URL}image?q=id:${id}&size=2&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: SUCCESS,
          payload: data,
        });
      });
  } catch (e) {
    dispatch({
      type: FAILURE,
      payload: e,
    });
  }
};
export const getWideImages = (actions, dispatch) => {
  const { REQUEST, SUCCESS, FAILURE } = actions;
  try {
    dispatch({
      type: REQUEST,
    });
    fetch(
      `${API_URL}image?q=width:>2000&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: SUCCESS,
          payload: data,
        });
      });
  } catch (e) {
    dispatch({
      type: FAILURE,
      payload: e,
    });
  }
};
