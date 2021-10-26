import { Message } from "./Message";

export const MessageList = ({ messageList }) => {
  return (
    <div> 
      {messageList.map((message) => (
        <Message key={message.id}  message={message}></Message>
      ))}
    </div>// можно было фрагментом - коммент Егора
  );
};
