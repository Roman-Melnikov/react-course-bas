import faker from "faker";
import firebase from "firebase";
import { CHANGE_MESSAGES } from ".";
import { AUTOR, INITIAL_STATE_MESSAGES } from "../../Constants";
import { chatsSelector } from "../Chats/selectors";
import { ADD_MESSAGE, REMOVE_MESSAGES_CHAT } from "./constants";

export const setInitialMessagesWithFirebase =
  (messages = INITIAL_STATE_MESSAGES) =>
  async () => {
    firebase.database().ref("messages").set(messages);
  };

export const addMessageWithFirebase = (value, autor, chatId) => async () => {
  firebase
    .database()
    .ref("messages")
    .child(chatId)
    .push({ text: value, autor, id: faker.datatype.uuid() });
};

export const changeMessagesAction = (messages) => {
  return {
    type: CHANGE_MESSAGES,
    messages,
  };
};

export const initMessageTracking = () => (dispatch) => {
  // firebase
  //   .database()
  //   .ref("messages")
  //   .on("child_changed", (snapshot) => {
  //     const messages = snapshot.val();
  //     console.log(messages);
  //     dispatch(changeMessagesAction(messages));
  //   });
  firebase
    .database()
    .ref("messages")
    .on("child_added", (snapshot) => {
      const chatId = snapshot.key;
      let message = {};
      snapshot.forEach((snap) => {
        message = snap.val();
      });
      console.log(message.text, message.autor);
      dispatch(addMessageActionWithThunk(message.text, message.autor, chatId));
    });
};

export const addMessageAction = (text, autor, chatId) => {
  console.log(text, autor, chatId);
  return {
    type: ADD_MESSAGE,
    text,
    autor,
    chatId,
  };
};

export const addMessageActionWithThunk =
  (text, autor, chatId) => (dispatch, getState) => {
    dispatch(addMessageAction(text, autor, chatId));
    if (autor === AUTOR) {
      const chatList = chatsSelector(getState());
      const chat = chatList.find((chat) => chat.id === chatId);
      setTimeout(
        () =>
          dispatch(addMessageAction(faker.lorem.text(), chat.name, chat.id)),
        1500
      );
    }
  };

export const removeMessagesChatAction = (chatId) => {
  return {
    type: REMOVE_MESSAGES_CHAT,
    chatId,
  };
};
