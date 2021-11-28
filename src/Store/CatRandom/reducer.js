import { GET_CAT_ERROR, GET_CAT_START, GET_CAT_SUCCESS } from "./constants";

const initialState = {
  image: null,
  loading: true,
  error: false,
};

export const catRandomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAT_SUCCESS:
      return {
        ...state,
        image: action.payload,
        loading: false,
      };
    case GET_CAT_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
      case GET_CAT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state;
  }
};
