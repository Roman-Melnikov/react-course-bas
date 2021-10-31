import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState, useCallback } from "react";
import { Box } from "@mui/system";

export const Form = ({ submit }) => {
  const ref = useRef(null);
  const [value, setValue] = useState("");

  const transitValue = useCallback(() => {
    submit(value);
    setValue("");
    ref.current?.focus();
  }, [value])

  const changeFormValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    ref.current?.focus();
  }, [])

  return (
    <Box sx={{ display: 'flex', height: '57px' }}>
      <TextField
        value={value}
        onChange={changeFormValue}
        inputRef={ref}
        fullWidth='true'
      />
      <Button onClick={transitValue} variant="contained" endIcon={<SendIcon />}></Button>
    </Box>
  );
};
