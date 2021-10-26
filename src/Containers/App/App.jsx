import { useCallback, useEffect, useState } from "react";
import { Form } from "../../Components/Form";
import faker from 'faker';
import { MessageList } from "../MessageList";
import { ChatList } from "../ChatList";
import { Container, Grid } from "@mui/material";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {//коммент Егора
    setChatList(() => {
      return (
        Array.from({ length: 10 }, () => {
          return (
            { name: faker.name.findName(), avatar: faker.image.avatar(), id: faker.datatype.uuid() }
          )
        })
      )
    })
  }, [])

  const changeFormValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const submit = () => {
    setMessageList([...messageList, { text: value, autor: "autor", id: faker.datatype.uuid() }]);//коммент Егора - "autor" можно вынести в константу и переиспользовать
    setValue("");
  };

  const answerBot = () => {
    setTimeout(
      () =>
        setMessageList([
          ...messageList,
          { text: "answer bot", autor: "robot", id: faker.datatype.uuid() },
        ]),
      1500
    );
  };

  useEffect(() => {
    if (messageList[messageList.length - 1]?.autor === "autor") {
      answerBot();
      return () => clearTimeout(answerBot);
    }
  }, [messageList]);

  return (
    <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Grid container spacing={3} rowSpacing={-3}>
        <Grid item xs={4} container="true" direction="column" justifyContent="center">
          <ChatList chatList={chatList}></ChatList>
        </Grid>
        <Grid item xs={8} sx={{ height: '100vh', padding: '3vh 0' }} container="true" direction="column" justifyContent="space-between">
          <MessageList messageList={messageList}></MessageList>
          <Form
            changeFormValue={changeFormValue}
            value={value}
            submit={submit}
          ></Form>
        </Grid>
      </Grid>
    </Container>//коммент Егора 56 стр
  );
}