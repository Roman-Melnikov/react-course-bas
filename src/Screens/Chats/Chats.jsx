import { useEffect, useState } from "react";
import { Form } from "../../Components/Form";
import { Container, Grid } from "@mui/material";
import faker from 'faker';
import { MessageList } from "../../Components/MessageList";
import { ChatList } from "../../Components/ChatList";
import { AUTOR, INITIAL_STATE_CHAT } from "../../Constants";
import { Redirect, useParams } from "react-router";
import { Navigation } from "../../Components/Navigation";
import { ROUTES } from "../../Components/Routing/constants";

export const Chats = () => {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState(INITIAL_STATE_CHAT.MAS_RANDOM);
    const [chatId, setChatId] = useState(true);
    const params = useParams();

    const submit = (value) => {
        const chat = chatList.find((chat) => chat.id === params.id);
        chat.messageList = [...chat.messageList, { text: value, autor: AUTOR }];
        setMessageList(chat.messageList);
    };

    useEffect(() => {
        const chat = chatList.find((chat) => chat.id === params.id)
        if (chat) {
            setMessageList(chat.messageList);
        } else {
            setChatId(false);
        }
    }, [params]);

    const answerBot = () => {
        return setTimeout(
            () => {
                for (let chat of chatList) {
                    if (chat.id === params.id) {
                        chat.messageList = [...chat.messageList, { text: faker.lorem.text(), autor: "robot" }];
                        setMessageList(chat.messageList);
                        return;
                    }
                }
            },
            1500
        );
    };

    useEffect(() => {
        let timerId;
        if (messageList[messageList.length - 1]?.autor === AUTOR) {
            timerId = answerBot();
            return () => clearTimeout(timerId);
        }
    }, [messageList]);

    if (!chatId) {
        return <Redirect to={ROUTES.NOCHAT} />
    }

    return (
        <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <Navigation />
            <Grid container spacing={3} rowSpacing={-3}>
                <Grid item xs={4} container="true" direction="column" justifyContent="center">
                    <ChatList chatList={chatList} />
                </Grid>
                <Grid item xs={8} sx={{ height: 'calc(100vh - 5vh)', padding: '3vh 0' }} container="true" direction="column" justifyContent="space-between">
                    <MessageList messageList={messageList} />
                    <Form submit={submit} />
                </Grid>
            </Grid>
        </Container>
    );
}