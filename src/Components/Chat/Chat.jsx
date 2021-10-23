import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItem } from "@mui/material";

export const Chat = ({ chat }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={chat.avatar}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={chat.name}
        />
      </ListItem>
      <Divider variant="inset"/>
    </>
  );
};
