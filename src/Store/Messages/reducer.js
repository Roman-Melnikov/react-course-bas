import { CHANGE_MESSAGES } from ".";
import { INITIAL_STATE_MESSAGES } from "../../Constants";
import { ADD_MESSAGE, REMOVE_MESSAGES_CHAT } from "./constants";

const initialState = {
  messageList: INITIAL_STATE_MESSAGES,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGES:
      return {
        ...state,
        messageList: [action.messages],
      };
    case ADD_MESSAGE:
      const currentChatIdMessages = state.messageList[action.chatId] ?? [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentChatIdMessages,
            {
              text: action.text,
              autor: action.autor,
              id: action.messageId,
            },
          ],
        },
      };
    case REMOVE_MESSAGES_CHAT:
      const { [action.chatId]: messagesToDelete, ...restMessageList } =
        state.messageList;
      return {
        ...state,
        messageList: { ...restMessageList },
      };
    default:
      return state;
  }
};
