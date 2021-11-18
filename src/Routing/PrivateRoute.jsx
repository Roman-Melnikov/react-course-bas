import { Route, Redirect } from "react-router";
import { ROUTES } from "./constants";

export const PrivateRoute = ({ authed, ...rest }) => {
    return authed ? <Route {...rest} /> : <Redirect to={ROUTES.SIGNIN} />;
}