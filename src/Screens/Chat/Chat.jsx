import { useEffect, useState } from "react";
import { Form } from "../../Components/Form";
import { Container, Grid, Button } from "@mui/material";
import faker from 'faker';
import { MessageList } from "../../Components/MessageList";
import { ChatList } from "../../Components/ChatList";
import { AUTOR } from "../../Constants";
import { Redirect, useParams } from "react-router";
import { Navigation } from "../../Components/Navigation";
import { ROUTES } from "../../Routing/constants";
import { useDispatch, useSelector } from "react-redux";
import { chatsSelector } from "../../Store/Chats/selectors";
import { messagesSelector } from "../../Store/Messages/selectors";
import { CreateChatModal } from "../../Components/CreateChatModal";
import { addMessageAction } from "../../Store/Messages/actions";
import { addChatAction } from "../../Store/Chats/actions"
import "./style.css"

export const Chat = () => {
    const [messageList, setMessageList] = useState([]);
    const [chatId, setChatId] = useState(true);

    const generalMessageList = useSelector(messagesSelector);
    const chatList = useSelector(chatsSelector);
    const dispatch = useDispatch();

    const params = useParams();

    const submit = (value) => {
        const chat = chatList.find((chat) => chat.id === params.id);
        dispatch(addMessageAction(value, AUTOR, chat.id));
    };

    const answerBot = () => {
        return setTimeout(
            () => {
                const chat = chatList.find((chat) => chat.id === params.id);
                dispatch(addMessageAction(faker.lorem.text(), chat.name, chat.id));
            },
            1500
        );
    };

    useEffect(() => {
        let timerId;
        if (messageList[messageList.length - 1]?.autor === AUTOR) {
            timerId = answerBot();
        }
        return () => clearTimeout(timerId);
    }, [messageList]);

    useEffect(() => {
        const chat = chatList.find((chat) => chat.id === params.id)
        if (chat) {
            setMessageList(generalMessageList[chat.id] ?? []);
        } else {
            setChatId(false);
        }
    }, [params, generalMessageList]);

    if (!chatId) {
        return <Redirect to={ROUTES.NOCHAT} />
    }

    const onAddChat = (newChatName) => {
        newChatName && dispatch(addChatAction(newChatName));
    };

    return (
        <Container className="chat">
            <Navigation />
            <Grid container spacing={3} rowSpacing={-3}>
                <Grid item xs={4} container="true" direction="column" justifyContent="center">
                    <ChatList chatList={chatList} />
                    <CreateChatModal onAddChat={onAddChat} />
                </Grid>
                <Grid item xs={8} sx={{ height: 'calc(100vh - 5vh)', padding: '3vh 0' }} container="true" direction="column" justifyContent="space-between">
                    <MessageList messageList={messageList} />
                    <Form submit={submit} />
                </Grid>
            </Grid>
        </Container>
    );
}