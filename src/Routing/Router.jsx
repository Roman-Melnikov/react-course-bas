import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import { Profile } from "../Screens/Profile";
import { Main } from "../Screens/Main";
import { Chat } from "../Screens/Chat";
import { NotFound } from "../Components/NotFound";
import { Chats } from "../Screens/Chats"
import { Navigation } from "../Components/Navigation";
import { NoChat } from "../Screens/NoChat/NoChat";

export const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path={ROUTES.MAIN}>
                    <Main />
                </Route>
                <Route exact path={ROUTES.PROFILE}>
                    <Profile />
                </Route>
                <Route exact path={ROUTES.CHATS}>
                    <Chats />
                </Route>
                <Route exact path={`${ROUTES.CHAT}/:id`}>
                    <Chat />
                </Route>
                <Route exact path={ROUTES.NOCHAT}>
                    <NoChat />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}