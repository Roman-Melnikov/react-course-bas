import { Breadcrumbs } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../Routing/constants";
import "./style.css"

export const Navigation = () => {
  return (
    <Breadcrumbs className="breadcrumbs">
      <NavLink exact activeClassName="selected" to={ROUTES.MAIN}>Main</NavLink>
      <NavLink exact activeClassName="selected" to={ROUTES.PROFILE}>Profile</NavLink>
      <NavLink exact activeClassName="selected" to={ROUTES.CHATS}>Chats</NavLink>
    </Breadcrumbs>
  )
}