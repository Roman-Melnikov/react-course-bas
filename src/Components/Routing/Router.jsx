import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import { Profile } from "../../Screens/Profile";
import { Main } from "../../Screens/Main";
import { Chats } from "../../Screens/Chats";
import { NoChat } from "../NoChat";
import { NotFound } from "../NotFound";

export const Router = () => {
    return (
        <BrowserRouter>
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
                <Route exact path={`${ROUTES.CHATS}/:id`}>
                    <Chats />
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