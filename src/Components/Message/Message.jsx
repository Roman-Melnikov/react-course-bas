import { Box } from "@mui/system";
import "./style.css";

export const Message = ({ message }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div className={`message-${message.autor === "robot" ? "robot" : "autor"}`}>
        {message.text}
        <span className="signature">{message.autor}</span>
      </div>
    </Box>
  );
};
