import { Container, Grid } from "@material-ui/core"
import { ChatList } from "../../Components/ChatList"
import { Navigation } from "../../Components/Navigation"
import { INITIAL_STATE_CHAT } from "../../Constants"
import "./style.css"

export const Chats = () => {
    return (
        <Container className="chats" >
            <Navigation />
            <Grid container spacing={3} rowSpacing={-3}>
                <Grid item xs={4} container="true" direction="column" justifyContent="center">
                    <ChatList chatList={INITIAL_STATE_CHAT.MAS_RANDOM} />
                </Grid>
                <Grid item xs={8} sx={{ height: 'calc(100vh - 5vh)', padding: '3vh 0' }} container="true" direction="column" justifyContent="center" alignContent="center">
                    <span>Please select a chat</span>
                </Grid>
            </Grid>
        </Container>
    )
}