import React from "react";
import Person from "@material-ui/icons/Person";

import AppPath from "../appPath";
import UserPage from "../../containers/pages/UserPage";

export const accountPath = new AppPath({
	path: "/account",
	anonymous: false,
	authenticated: true,
	sidebarName: "Account",
	navbarName: "Account",
	icon: Person,
	active: true,
	component: <UserPage />,
	//tenantNotRequired: true
});
