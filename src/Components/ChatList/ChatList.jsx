import { List, Paper } from "@mui/material";
import { ChatListItem } from "../ChatListItem";
import "./style.css"

export const ChatList = ({ chatList }) => {
  return (
    <Paper>
      <List className="list">
        {chatList.map((chat) => (
          <ChatListItem key={chat.id} chat={chat}></ChatListItem>
        ))}
      </List>
    </Paper>
  );
};
