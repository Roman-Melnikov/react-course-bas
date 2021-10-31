import { Box } from "@mui/system";
import { Message } from "../Message";

export const MessageList = ({ messageList }) => {
  return (
    <Box sx={{ height: 'calc(89vh - 57px)', overflow: 'auto' }}>
      {messageList.map((message, index) => (
        <Message key={index} message={message}></Message>
      ))}
    </Box>
  );
};
