import React from "react";
import AppPath from "../appPath";
import LoginPage from "../../containers/pages/LoginPage";
import Person from "@material-ui/icons/Person";

export const loginPath = new AppPath({
	path: "/login",
	anonymous: true,
	authenticated: false,
	sidebarName: "Log In",
	navbarName: "Log In",
	icon: Person,
	active: true,
	component: <LoginPage />,
});
