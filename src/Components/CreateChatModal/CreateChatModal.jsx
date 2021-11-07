import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { DialogActions } from "@mui/material";
import { useCallback, useState } from "react"

export const CreateChatModal = (props) => {
    const [open, setOpen] = useState(false);
    const [newChatName, setNewChatName] = useState("");
    console.log(props);

    const handleOpen = () => setOpen(!open);

    const handleClose = useCallback(() => {
        setNewChatName("");
        setOpen(false);
    }, []);

    const transitNewChatName = () => {
        props.onAddChat(newChatName)
        setNewChatName("");
        setOpen(false);
    };

    const handleChange = (e) => setNewChatName(e.target.value);

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleOpen} >
                Add chat
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Please enter the chat name</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name:"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newChatName}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={transitNewChatName}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}