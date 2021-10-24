import { Box } from "@mui/system";
import { Message } from "../../Components/Message";

export const MessageList = ({ messageList }) => {
  return (
    <Box sx={{ height: 'calc(94vh - 57px)', overflow: 'auto' }}>
      {messageList.map((message) => (
        <Message key={message.id} message={message}></Message>
      ))}
    </Box>
  );
};
