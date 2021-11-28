import { Button, Grid, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import "./style.css";

export const FormAuth = ({ handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => { setEmail(e.target.value) };
    const handlePasswordChange = (e) => { setPassword(e.target.value) };

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <TextField className="text-field"
                    margin="normal"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    autoFocus="true"
                    placeholder="e-mail"
                />
            </Grid>
            <Grid item>
                <TextField className="text-field"
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="password"
                />
            </Grid>
            <Grid item>
                <Button onClick={() => handleSubmit(email, password)} size="large" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </Grid>
        </Grid>
    )
}