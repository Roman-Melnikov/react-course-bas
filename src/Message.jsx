import "./Message.css";

export const Message = ({ message }) => {
  return (
    <div className="message-wrp">
      <div className={`message-${message.autor === "robot" ? "robot" : "autor"}`}>
        {message.text}
        <span className="signature">{message.autor}</span>
      </div>
    </div>
  );
};
