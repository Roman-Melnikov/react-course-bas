import { AUTHED_BOOL_ACTION, SHOW_NAME_ACTION } from "./constants";
import firebase from "firebase";

export const showNameAction = () => {
  return { type: SHOW_NAME_ACTION };
};

export const authedBoolAction = (user) => {
  return { type: AUTHED_BOOL_ACTION, user };
};

export const authedBoolWithFirebase = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(authedBoolAction(true));
    } else {
      dispatch(authedBoolAction(false));
    }
  });
};
