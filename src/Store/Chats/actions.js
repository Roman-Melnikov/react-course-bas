import { INITIAL_STATE_CHATS } from "../../Constants";
import { ADD_CHAT, REMOVE_CHAT } from "./constants";
import firebase from "firebase";
import faker from "faker";

export const setInitialChatsWithFirebase =
  (chats = INITIAL_STATE_CHATS) =>
  async () => {
    firebase.database().ref("chats").set(chats);
  };

export const addChatAction = (newChat) => {
  return {
    type: ADD_CHAT,
    newChat,
  };
};

export const removeChatAction = (chatId) => {
  return {
    type: REMOVE_CHAT,
    chatId,
  };
};

export const addChatWithFirebase = (name) => async () => {
  firebase.database().ref("chats").push({
    name,
    avatar: faker.image.avatar(),
    id: faker.datatype.uuid(),
  });
};

export const initChatTracking = () => (dispatch) => {
  firebase
    .database()
    .ref("chats")
    .on("child_added", (snapshot) => {
      const newChat = snapshot.val();
      dispatch(addChatAction(newChat));
    });
};
