import { List, Paper } from "@mui/material";
import { Chat } from "../Chat";
import "./style.css"

export const ChatList = ({ chatList, removeChat }) => {
  return (
    <Paper>
      <List className="list">
        {chatList.map((chat) => (
          <Chat key={chat.id} chat={chat} removeChat={removeChat}></Chat>
        ))}
      </List>
    </Paper>
  );
};
