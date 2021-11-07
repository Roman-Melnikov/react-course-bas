import { ADD_MESSAGE, REMOVE_MESSAGES_CHAT } from "../constants";

export const addMessageAction = (text, autor, chatId) => {
  return {
    type: ADD_MESSAGE,
    text,
    autor,
    chatId,
  };
};

export const removeMessagesChatAction = (chatId) => {
  return {
    type: REMOVE_MESSAGES_CHAT,
    chatId,
  };
};
