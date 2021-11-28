import faker from "faker";
import firebase from "firebase";
import { INITIAL_STATE_MESSAGES } from "../../Constants";
import { ADD_MESSAGE, REMOVE_MESSAGES_CHAT } from "./constants";
import { messagesSelector } from ".";

export const setInitialMessagesWithFirebase =
  (messages = INITIAL_STATE_MESSAGES) =>
  async () => {
    firebase.database().ref("messages").set(messages);
  };

export const addMessageWithFirebase = (value, autor, chat) => async () => {
  firebase
    .database()
    .ref("messages")
    .child(chat.id)
    .push({ text: value, autor, id: faker.datatype.uuid() });
  setTimeout(
    () =>
      firebase
        .database()
        .ref("messages")
        .child(chat.id)
        .push({
          text: faker.lorem.text(),
          autor: chat.name,
          id: faker.datatype.uuid(),
        }),
    1500
  );
};

export const initMessageTracking = () => (dispatch, getState) => {
  firebase
    .database()
    .ref("messages")
    .on("child_changed", (snapshot) => {
      const chatId = snapshot.key;
      let message = {};
      snapshot.forEach((snap) => {
        message = snap.val();
      });
      dispatch(
        addMessageActionWithThunk(
          message.text,
          message.autor,
          chatId,
          message.Id
        )
      );
    });
  firebase
    .database()
    .ref("messages")
    .on("child_added", (snapshot) => {
      const chatId = snapshot.key;
      const messageList = messagesSelector(getState());
      let newMessage = {};
      snapshot.forEach((snap) => (newMessage = snap.val()));
      const checkMessage = messageList[chatId]?.find((message) => {
        return newMessage.id === message.id;
      });
      !checkMessage &&
        dispatch(
          addMessageActionWithThunk(
            newMessage.text,
            newMessage.autor,
            chatId,
            newMessage.Id
          )
        );
    });
  firebase
    .database()
    .ref("messages")
    .on("child_removed", (snapshot) => {
      dispatch(removeMessagesChatAction(snapshot.key));
    });
};

export const addMessageAction = (text, autor, chatId, messageID) => {
  return {
    type: ADD_MESSAGE,
    text,
    autor,
    chatId,
    messageID,
  };
};

export const addMessageActionWithThunk =
  (text, autor, chatId, messageId) => (dispatch) => {
    dispatch(addMessageAction(text, autor, chatId, messageId));
  };

export const removeMessagesChatAction = (chatId) => {
  return {
    type: REMOVE_MESSAGES_CHAT,
    chatId,
  };
};

export const removeMessagesWithFirebase = (chatId) => async () => {
  firebase.database().ref("messages").child(chatId).remove();
};
