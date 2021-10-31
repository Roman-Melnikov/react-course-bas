import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AUTOR, INITIAL_STATE_CHAT } from "../../Constants";
import "./style.css";

export const Message = ({ message }) => {
  const params = useParams();
  const [nameAutor, setNameAutor] =useState();

  useEffect(() => {
    for (let chat of INITIAL_STATE_CHAT.MAS_RANDOM) {
      if (chat.id === params.id) {
        setNameAutor(chat.name);
      }
    }
  }, [message])

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div className={`message-${message.autor === AUTOR ? "autor" : "robot" }`}>
        {message.text}
        <span className="signature">{message.autor === AUTOR ? AUTOR : nameAutor}</span>
      </div>
    </Box>
  );
};
