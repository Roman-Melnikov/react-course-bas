import { SHOW_NAME_ACTION } from "../Profile";

const initialState = {
    showName: true,
    name: "Vasya",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
