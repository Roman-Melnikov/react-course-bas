import { ADD_CHAT, REMOVE_CHAT } from "../constants";

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
