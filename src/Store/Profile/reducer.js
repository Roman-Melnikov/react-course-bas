import { SHOW_NAME_ACTION } from "../Profile";
import { AUTHED_BOOL_ACTION } from "./constants";

const initialState = {
  showName: true,
  name: "Vasya",
  authed: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHED_BOOL_ACTION:
      return {
        ...state,
        authed: action.user,
      };
    case SHOW_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
