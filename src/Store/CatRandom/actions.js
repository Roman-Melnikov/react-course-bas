import { CAT_URL } from "../../Api/constants";
import { GET_CAT_ERROR, GET_CAT_START, GET_CAT_SUCCESS } from "./constants";

const getCatStartAction = () => ({ type: GET_CAT_START });
const getCatSuccessAction = (payload) => ({ type: GET_CAT_SUCCESS, payload });
const getCatErrorAction = () => ({ type: GET_CAT_ERROR });

export const getCatRequest = () => async (dispatch) => {
  dispatch(getCatStartAction());

  try {
    const response = await fetch(CAT_URL);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    dispatch(getCatSuccessAction(result.url));
  } catch {
    dispatch(getCatErrorAction());
  }
};