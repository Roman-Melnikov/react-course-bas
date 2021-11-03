import faker from "faker";

export const AUTOR = "autor";

export const INITIAL_STATE_CHAT = {
  MAS_RANDOM: Array.from({ length: 10 }, () => {
    return {
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      id: faker.datatype.uuid(),
      messageList: Array.from(
        { length: Math.floor(Math.random() * 10) },
        (_, i) => {
          if (i % 2 !== 0) {
            return { text: faker.lorem.text(), autor: AUTOR };
          } else {
            return { text: faker.lorem.text(), autor: null };
          }
        }
      ),
    };
  }),
};
