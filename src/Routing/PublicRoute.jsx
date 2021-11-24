import React from "react";
import { Route, Redirect } from "react-router";
import { ROUTES } from "./constants";

export const PublicRoute = React.memo(({ authed, ...rest }) => {
    return !authed ? <Route {...rest} /> : <Redirect to={ROUTES.CHATS} />;
});