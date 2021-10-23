import { Box } from "@mui/system";
import { Message } from "../../Components/Message";

export const MessageList = ({ messageList }) => {
  return (
    <Box sx={{ height: 'calc(100vh - 120px)', overflow: 'auto', paddingTop: '3%' }}>
      {messageList.map((message) => (
        <Message key={message.id} message={message}></Message>
      ))}
    </Box>
  );
};
