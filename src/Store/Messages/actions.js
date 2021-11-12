import faker from "faker";
import { AUTOR } from "../../Constants";
import { chatsSelector } from "../Chats/selectors";
import { ADD_MESSAGE, REMOVE_MESSAGES_CHAT } from "./constants";

export const addMessageAction = (text, autor, chatId) => {
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
      setTimeout(() => dispatch(addMessageAction(faker.lorem.text(), chat.name, chat.id)),1500);
    }
  };

export const removeMessagesChatAction = (chatId) => {
  return {
    type: REMOVE_MESSAGES_CHAT,
    chatId,
  };
};
