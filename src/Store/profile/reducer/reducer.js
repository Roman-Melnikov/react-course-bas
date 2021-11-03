import { SHOW_NAME_ACTION } from "../constants/constants";

const initialState = {
  profile: {
    showName: true,
    name: "Vasya",
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAME_ACTION:
      return {
        ...state,
        profile: { ...state.profile, showName: !state.profile.showName },
      };
    default:
      return state;
  }
};
