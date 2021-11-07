import { Box } from "@mui/system";
import { AUTOR } from "../../Constants";
import "./style.css";

export const Message = ({ message }) => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div className={`message-${message.autor === AUTOR ? "autor" : "robot"}`}>
        {message.text}
        <span className="signature">{message.autor}</span>
      </div>
    </Box>
  );
};
