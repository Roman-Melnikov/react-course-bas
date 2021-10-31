import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItem } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../Routing/constants';
import  './style.css';

export const Chat = ({ chat }) => {
  return (
    <NavLink exact to={`${ROUTES.CHAT}/${chat.id}`} activeClassName="selected" className="chat-item">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={chat.avatar}></Avatar>
        </ListItemAvatar>
        <ListItemText 
          primary={chat.name}
        />
      </ListItem>
      <Divider variant="inset"/>
    </NavLink>
  );
};
