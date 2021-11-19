import { INITIAL_STATE_CHATS } from "../../Constants/constants";
import { ADD_CHAT, REMOVE_CHAT } from "../Chats";

const initialState = {
  chatList: INITIAL_STATE_CHATS,
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [...state.chatList, action.newChat],
      };
    case REMOVE_CHAT:
      return {
        ...state,
        chatList: state.chatList.filter((chat) => chat.id !== action.chatId),
      };
    default:
      return state;
  }
};
