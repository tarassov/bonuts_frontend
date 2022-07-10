import React from "react";
import People from "@material-ui/icons/People";

import AppPath from "../appPath";
import ProfilesLayout from "../../layouts/profiles/ProfilesLayout";

export const peoplePath = new AppPath({
	path: "/people",
	anonymous: false,
	authenticated: true,
	sidebarName: "People",
	navbarName: "People",
	icon: People,
	active: true,
	admin: false,
	component: <ProfilesLayout />,
});
