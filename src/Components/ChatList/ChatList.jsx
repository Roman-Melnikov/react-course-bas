import { List, Paper } from "@mui/material";
import React from "react";
import { ChatListItem } from "../ChatListItem";
import "./style.css"

export const ChatList = React.memo(({ chatList }) => {
  return (
    <Paper>
      <List className="list">
        {chatList.map((chat) => (
          <ChatListItem key={chat.id} chat={chat}></ChatListItem>
        ))}
      </List>
    </Paper>
  );
});
