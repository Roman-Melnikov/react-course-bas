import faker from "faker";
import firebase from "firebase";
import { CHANGE_MESSAGES } from ".";
import { AUTOR, INITIAL_STATE_MESSAGES } from "../../Constants";
import { chatsSelector } from "../Chats/selectors";
import { ADD_MESSAGE, REMOVE_MESSAGES_CHAT } from "./constants";
import { messagesSelector } from ".";

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
      dispatch(addMessageActionWithThunk(message.text, message.autor, chatId, message.Id));
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
          addMessageActionWithThunk(newMessage.text, newMessage.autor, chatId, newMessage.Id)
        );
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
  (text, autor, chatId, messageId) => (dispatch, getState) => {
    dispatch(addMessageAction(text, autor, chatId, messageId));
    if (autor === AUTOR) {
      const chatList = chatsSelector(getState());
      const chat = chatList.find((chat) => chat.id === chatId);
      setTimeout(
        () =>
          dispatch(
            addMessageWithFirebase(faker.lorem.text(), chat.name, chat.id)
          ),
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
