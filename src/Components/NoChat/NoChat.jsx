import { Container, Grid } from "@mui/material"
import { INITIAL_STATE_CHAT } from "../../Constants"
import { ChatList } from "../ChatList"
import { Navigation } from "../Navigation"

export const NoChat = () => {
    return (
        <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
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