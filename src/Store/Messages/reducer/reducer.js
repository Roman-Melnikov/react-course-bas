import faker from "faker";
import { INITIAL_STATE_MESSAGES } from "../../../Constants";
import { ADD_MESSAGE, REMOVE_MESSAGES_CHAT } from "../constants";

const initialState = {
  messageList: INITIAL_STATE_MESSAGES,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
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
              id: faker.datatype.uuid(),
            },
          ],
        },
      };
    case REMOVE_MESSAGES_CHAT:
      const currentState = state;
      delete currentState.messageList[action.chatId];
      return {
        ...state,
        messageList: { ...currentState.messageList },
      };
    default:
      return state;
  }
};
