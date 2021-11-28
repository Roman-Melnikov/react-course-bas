import { useSelector } from "react-redux"
import { ChatList } from "../../Components/ChatList"
import { chatsSelector } from "../../Store/Chats/selectors"
import { CreateChatModal } from "../../Components/CreateChatModal";
import { useAddChat } from "../../Hooks"
import { Grid } from "@mui/material";
import React from "react";

export const Chats = () => {
    const chatList = useSelector(chatsSelector);
    const onAddChat = useAddChat();

    return (
            <Grid container spacing={3} rowSpacing={-3}>
                <Grid item xs={4} container="true" direction="column" justifyContent="center">
                    <ChatList chatList={chatList} />
                    <CreateChatModal onAddChat={onAddChat} />
                </Grid>
                <Grid item xs={8} sx={{ height: 'calc(100vh - 5vh)', padding: '3vh 0' }} container="true" direction="column" justifyContent="center" alignContent="center">
                    <span>Please select a chat</span>
                </Grid>
            </Grid>
    )
};