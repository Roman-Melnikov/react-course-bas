import { Route, Redirect } from "react-router";
import { ROUTES } from "./constants";

export const PublicRoute = ({ authed, ...rest }) => {
    return !authed ? <Route {...rest} /> : <Redirect to={ROUTES.CHATS} />;
}