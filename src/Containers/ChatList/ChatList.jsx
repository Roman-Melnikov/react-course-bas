import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Chat } from "../../Components/Chat";

export const ChatList = ({ chatList }) => {
  return (
    <Paper>
      <Box sx={{ overflow: 'auto', height: 'calc(100vh - 120px)' }}>
        {chatList.map((chat) => (
          <Chat key={chat.id} chat={chat}></Chat>
        ))}
      </Box>
    </Paper>// надо было List из Material тут использовать(вместо Box) - коммент Егора
  );
};
