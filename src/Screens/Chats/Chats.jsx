import { Container, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { ChatList } from "../../Components/ChatList"
import { Navigation } from "../../Components/Navigation"
import { addChatAction } from "../../Store/Chats/actions"
import { chatsSelector } from "../../Store/Chats/selectors"
import { CreateChatModal } from "../../Components/CreateChatModal";
import "./style.css"

export const Chats = () => {
    const chatList = useSelector(chatsSelector);
    const dispatch = useDispatch();

    const onAddChat = (newChatName) => {
        newChatName && dispatch(addChatAction(newChatName));
    };

    return (
        <Container className="chats" >
            <Navigation />
            <Grid container spacing={3} rowSpacing={-3}>
                <Grid item xs={4} container="true" direction="column" justifyContent="center">
                    <ChatList chatList={chatList} />
                    <CreateChatModal onAddChat={onAddChat} />
                </Grid>
                <Grid item xs={8} sx={{ height: 'calc(100vh - 5vh)', padding: '3vh 0' }} container="true" direction="column" justifyContent="center" alignContent="center">
                    <span>Please select a chat</span>
                </Grid>
            </Grid>
        </Container>
    )
}