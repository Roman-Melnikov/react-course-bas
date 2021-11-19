import { INITIAL_STATE_CHATS } from "../../Constants";
import { ADD_CHAT, REMOVE_CHAT } from "./constants";
import firebase from "firebase";
import faker from "faker";
import { chatsSelector } from ".";

export const setInitialChatsWithFirebase =
  (chats = INITIAL_STATE_CHATS) =>
  async () => {
    let chatWithFirebase = {};
    chats.forEach((chat) => {
      chatWithFirebase = {
        ...chatWithFirebase,
        [chat.id]: { id: chat.id, name: chat.name, avatar: chat.avatar },
      };
    });
    firebase.database().ref("chats").set(chatWithFirebase);
  };

export const initChatsTracking = () => (dispatch, getState) => {
  firebase
    .database()
    .ref("chats")
    .on("child_added", (snapshot) => {
      const chatList = chatsSelector(getState());
      let newChat = {};
      snapshot.forEach((snap) => {
        newChat = snap.val();
      });
      const checkChat = chatList.find((chat) => chat.id === newChat.id);
      !checkChat && dispatch({ type: ADD_CHAT, newChat });
    });
  firebase
    .database()
    .ref("chats")
    .on("child_removed", (snapshot) => {
      const chatList = chatsSelector(getState());
      const removeChat = snapshot.val();
      const checkChat = chatList.find((chat) => chat.id === removeChat.id);
      checkChat && dispatch(removeChatAction(removeChat.id));
    });
};

export const addChatWithFirebase = (name) => async () => {
  const id = faker.datatype.uuid();
  firebase
    .database()
    .ref("chats")
    .push({ [id]: { name, avatar: faker.image.avatar(), id } });
};

export const removeChatWithFirebase = (chatId) => async () => {
  firebase.database().ref("chats").child(chatId).remove();
};

export const removeChatAction = (chatId) => {
  return {
    type: REMOVE_CHAT,
    chatId,
  };
};
