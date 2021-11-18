import { Button, Grid, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./style.css";

export const FormAuth = ({ email, password, handleEmailChange, handlePasswordChange, handleSubmit }) => {
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
                <Button onClick={handleSubmit} size="large" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </Grid>
        </Grid>
    )
}