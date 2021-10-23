import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef } from "react";
import { Box } from "@mui/system";

export const Form = ({ changeFormValue, value, submit }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  })

  return (
    <Box sx={{display: 'flex', height: '57px'}}>
      <TextField
        value={value}
        onChange={changeFormValue}
        inputRef={ref}
        fullWidth='true'
      />
      <Button onClick={submit} variant="contained" endIcon={<SendIcon />}></Button>
    </Box>
  );
};
