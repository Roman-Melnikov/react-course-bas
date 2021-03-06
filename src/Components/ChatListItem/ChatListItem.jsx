import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, ListItem } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../Routing/constants';
import { IconButton } from '@material-ui/core';
import './style.css';
import { useDispatch } from 'react-redux';
import { removeChatWithFirebase } from '../../Store/Chats';
import { removeMessagesWithFirebase } from '../../Store/Messages';

export const ChatListItem = (props) => {
  const dispatch = useDispatch();

  const removeChatListItem = (chatId) => {
    dispatch(removeChatWithFirebase(chatId));
    dispatch(removeMessagesWithFirebase(chatId));
  };

  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={10}>
        <NavLink exact to={`${ROUTES.CHAT}/${props.chat.id}`} activeClassName="selected" className="chat-item">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={props.chat.avatar}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={props.chat.name}
            />
          </ListItem>
          <Divider variant="inset" />
        </NavLink>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label="delete" >
          <DeleteIcon onClick={() => removeChatListItem(props.chat.id)} />
        </IconButton>
      </Grid>
    </Grid>
  );
};
