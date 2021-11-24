import faker from "faker";
import { INITIAL_STATE_CHATS } from "../../../Constants";
import { chatsReducer } from "..";
import { ADD_CHAT } from "..";
import { removeChatAction } from "../actions";

describe("reducerChats", () => {
  it("is the chat added?", () => {
    const fakeStore = {chatList: INITIAL_STATE_CHATS};
    const { chatList: prevChatList } = fakeStore;
    const { chatList: nextChatList } = chatsReducer(fakeStore, {
      type: ADD_CHAT,
      newChat: {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
      },
    });
    const expected = 1;
    const received = nextChatList.length - prevChatList.length;
    expect(received).toEqual(expected);
  });
  it("is the chat deleted?", () => {
    const fakeStore = {chatList: INITIAL_STATE_CHATS};
    const { chatList: prevChatList } = fakeStore;
    const chatId = prevChatList[0].id;
    const { chatList: nextChatList } = chatsReducer(fakeStore, removeChatAction(chatId));
    const expected = 1;
    const received = prevChatList.length - nextChatList.length;
    expect(received).toEqual(expected);
  });
});
