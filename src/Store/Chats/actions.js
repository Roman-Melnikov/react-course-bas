import { INITIAL_STATE_CHATS } from "../../Constants";
import { ADD_CHAT, REMOVE_CHAT } from "./constants";
import firebase from "firebase";
import faker from "faker";
import { chatsSelector } from ".";

export const setInitialChatsWithFirebase =
  (chats = INITIAL_STATE_CHATS) =>
  async () => {
    firebase.database().ref("chats").set(chats);
  };
  
  export const initChatTracking = () => (dispatch, getState) => {
  firebase
    .database()
    .ref("chats")
    .on("child_added", (snapshot) => {
      const chatList = chatsSelector(getState());
      const newChat = snapshot.val();
      const checkChat = chatList.find((chat) => chat.id === newChat.id);
      !checkChat && dispatch({type: ADD_CHAT, newChat});
    });
};

// export const addChatAction = (newChat) => {
//   return {
//     type: ADD_CHAT,
//     newChat,
//   };
// };

// export const removeChatAction = (chatId) => {
//   return {
//     type: REMOVE_CHAT,
//     chatId,
//   };
// };

export const addChatWithFirebase = (name) => async () => {
  firebase.database().ref("chats").push({
    name,
    avatar: faker.image.avatar(),
    id: faker.datatype.uuid(),
  });
};


