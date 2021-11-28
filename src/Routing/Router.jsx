import { BrowserRouter, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import { Profile } from "../Screens/Profile";
import { Main } from "../Screens/Main";
import { Chat } from "../Screens/Chat";
import { NotFound } from "../Components/NotFound";
import { Chats } from "../Screens/Chats"
import { Navigation } from "../Components/Navigation";
import { NoChat } from "../Screens/NoChat/NoChat";
import { CatRandom } from "../Screens/CatRandom/CatRandom";
import { Signup } from "../Screens/Signup/Signup";
import { Signin } from "../Screens/Signin/Signin";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Container } from "@mui/material";
import { messagesSelector, setInitialMessagesWithFirebase } from "../Store/Messages";
import { chatsSelector, initChatsTracking, setInitialChatsWithFirebase } from "../Store/Chats";
import { initMessageTracking } from "../Store/Messages/actions";
import { authedBoolWithFirebase, profileSelector } from "../Store/Profile";
import "./style.css";

export const Router = () => {
    const dispatch = useDispatch();
    const { authed } = useSelector(profileSelector);
    const messages = useSelector(messagesSelector);
    const chats = useSelector(chatsSelector);

    useEffect(() => {
        dispatch(authedBoolWithFirebase())
    }, []);

    useEffect(() => {
        dispatch(setInitialMessagesWithFirebase(messages));
        dispatch(setInitialChatsWithFirebase(chats));
    }, [])

    useEffect(() => {
        dispatch(initMessageTracking());
        dispatch(initChatsTracking());
    }, []);

    return (
        <BrowserRouter>
            <Container className="container">
                <Navigation />
                <Switch>
                    <PrivateRoute authed={authed} exact path={ROUTES.MAIN}>
                        <Main />
                    </PrivateRoute>
                    <PrivateRoute authed={authed} exact path={ROUTES.PROFILE}>
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute authed={authed} exact path={ROUTES.CHATS}>
                        <Chats />
                    </PrivateRoute>
                    <PrivateRoute authed={authed} exact path={`${ROUTES.CHAT}/:id`}>
                        <Chat />
                    </PrivateRoute>
                    <PrivateRoute authed={authed} exact path={ROUTES.CAT_RANDOM}>
                        <CatRandom />
                    </PrivateRoute>
                    <PublicRoute authed={authed} exact path={ROUTES.SIGNUP}>
                        <Signup />
                    </PublicRoute>
                    <PublicRoute authed={authed} exact path={ROUTES.SIGNIN}>
                        <Signin />
                    </PublicRoute>
                    <PrivateRoute authed={authed} exact path={ROUTES.NOCHAT}>
                        <NoChat />
                    </PrivateRoute>
                    <PrivateRoute authed={authed} >
                        <NotFound />
                    </PrivateRoute>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}