import { useCallback, useEffect, useState } from "react";
import { Form } from "./Form";
import { MessageList } from "./MessageList";
import "./App.css";
import faker from 'faker';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const changeFormValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const submit = () => {
    setMessageList([...messageList, { text: value, autor: "autor", id: faker.datatype.uuid() }]);
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
    <div className="container">
      <MessageList messageList={messageList}></MessageList>
      <Form
        changeFormValue={changeFormValue}
        value={value}
        submit={submit}
      ></Form>
    </div>
  );
}

export default App;
