import { INITIAL_STATE_CHATS } from "../../Constants";
import { ADD_CHAT, REMOVE_CHAT } from "./constants";
import firebase from "firebase";

export const setInitialChatsWithFirebase =
  (chats = INITIAL_STATE_CHATS) =>
  async () => {
    firebase.database().ref("chats").set(chats);
  };

export const addChatAction = (name) => {
  return {
    type: ADD_CHAT,
    name,
  };
};

export const removeChatAction = (chatId) => {
  return {
    type: REMOVE_CHAT,
    chatId,
  };
};
