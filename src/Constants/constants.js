import faker from "faker";

export const AUTOR = "autor";

export const INITIAL_STATE_CHATS = Array.from({ length: 10 }, () => {
  return {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    id: faker.datatype.uuid(),
  };
});

export let INITIAL_STATE_MESSAGES = {};
for (let chat of INITIAL_STATE_CHATS) {
  INITIAL_STATE_MESSAGES = {
    ...INITIAL_STATE_MESSAGES,
    [chat.id]: Array.from(
      { length: Math.floor(Math.random() * 10) },
      (_, i) => {
        if (i % 2 !== 0) {
          return {
            text: faker.lorem.text(),
            autor: AUTOR,
            id: faker.datatype.uuid(),
          };
        } else {
          return {
            text: faker.lorem.text(),
            autor: chat.name,
            id: faker.datatype.uuid(),
          };
        }
      }
    ),
  };
}
